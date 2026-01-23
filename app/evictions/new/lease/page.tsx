'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField, SelectField, Checkbox } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';

export default function LeasePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        hasWrittenLease: true,
        leaseStartDate: '',
        leaseEndDate: '',
        monthlyRent: '',
        securityDeposit: '',
        rentDueDay: '1',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const currentCase = getCurrentCase();
        if (currentCase?.lease) {
            setFormData({
                hasWrittenLease: currentCase.lease.hasWrittenLease ?? true,
                leaseStartDate: currentCase.lease.leaseStartDate || '',
                leaseEndDate: currentCase.lease.leaseEndDate || '',
                monthlyRent: currentCase.lease.monthlyRent?.toString() || '',
                securityDeposit: currentCase.lease.securityDeposit?.toString() || '',
                rentDueDay: currentCase.lease.rentDueDay?.toString() || '1',
            });
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.monthlyRent) newErrors.monthlyRent = 'Monthly rent amount is required';
        if (!formData.rentDueDay) newErrors.rentDueDay = 'Rent due day is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;

        saveDraft({
            lease: {
                hasWrittenLease: formData.hasWrittenLease,
                leaseStartDate: formData.leaseStartDate,
                leaseEndDate: formData.leaseEndDate,
                monthlyRent: parseFloat(formData.monthlyRent) || 0,
                securityDeposit: parseFloat(formData.securityDeposit) || 0,
                rentDueDay: parseInt(formData.rentDueDay) || 1,
            },
        });

        router.push('/evictions/new/reason');
    };

    const handleBack = () => {
        saveDraft({
            lease: {
                hasWrittenLease: formData.hasWrittenLease,
                leaseStartDate: formData.leaseStartDate,
                leaseEndDate: formData.leaseEndDate,
                monthlyRent: parseFloat(formData.monthlyRent) || 0,
                securityDeposit: parseFloat(formData.securityDeposit) || 0,
                rentDueDay: parseInt(formData.rentDueDay) || 1,
            },
        });
        router.push('/evictions/new/tenant');
    };

    const rentDayOptions = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: `${i + 1}${getOrdinalSuffix(i + 1)} of the month`,
    }));

    return (
        <FormLayout
            currentStep={4}
            title="Lease Details"
            description="Provide information about the rental agreement."
        >
            <Checkbox
                label="There is a written lease agreement"
                name="hasWrittenLease"
                checked={formData.hasWrittenLease}
                onChange={handleChange}
                hint="Oral/verbal agreements are valid in Alabama but may require additional documentation."
            />

            {formData.hasWrittenLease && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <TextField
                        label="Lease Start Date"
                        name="leaseStartDate"
                        type="date"
                        value={formData.leaseStartDate}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Lease End Date"
                        name="leaseEndDate"
                        type="date"
                        value={formData.leaseEndDate}
                        onChange={handleChange}
                        hint="Leave blank if month-to-month."
                    />
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <TextField
                    label="Monthly Rent Amount ($)"
                    name="monthlyRent"
                    type="number"
                    value={formData.monthlyRent}
                    onChange={handleChange}
                    placeholder="1200"
                    error={errors.monthlyRent}
                />
                <TextField
                    label="Security Deposit ($)"
                    name="securityDeposit"
                    type="number"
                    value={formData.securityDeposit}
                    onChange={handleChange}
                    placeholder="1200"
                    hint="Optional"
                />
            </div>

            <SelectField
                label="Rent Due Day"
                name="rentDueDay"
                value={formData.rentDueDay}
                onChange={handleChange}
                options={rentDayOptions}
                error={errors.rentDueDay}
                hint="The day of each month when rent is due."
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button variant="secondary" onClick={handleBack}>
                    ← Back
                </Button>
                <Button onClick={handleNext}>
                    Next: Eviction Reason →
                </Button>
            </div>
        </FormLayout>
    );
}

function getOrdinalSuffix(n: number): string {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}