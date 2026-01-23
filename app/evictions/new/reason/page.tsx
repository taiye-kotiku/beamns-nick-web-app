'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField, SelectField } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';
import { NOTICE_REQUIREMENTS } from '@/app/lib/alabama-rules';

export default function ReasonPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        type: '',
        amountOwed: '',
        lastPaymentDate: '',
        violationDescription: '',
        otherReason: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const currentCase = getCurrentCase();
        if (currentCase?.evictionReason) {
            setFormData({
                type: currentCase.evictionReason.type || '',
                amountOwed: currentCase.evictionReason.amountOwed?.toString() || '',
                lastPaymentDate: currentCase.evictionReason.lastPaymentDate || '',
                violationDescription: currentCase.evictionReason.violationDescription || '',
                otherReason: currentCase.evictionReason.otherReason || '',
            });
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.type) newErrors.type = 'Please select an eviction reason';

        if (formData.type === 'non-payment' && !formData.amountOwed) {
            newErrors.amountOwed = 'Amount owed is required for non-payment evictions';
        }
        if (formData.type === 'lease-violation' && !formData.violationDescription) {
            newErrors.violationDescription = 'Please describe the lease violation';
        }
        if (formData.type === 'other' && !formData.otherReason) {
            newErrors.otherReason = 'Please specify the reason for eviction';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;

        saveDraft({
            evictionReason: {
                type: formData.type as any,
                amountOwed: formData.amountOwed ? parseFloat(formData.amountOwed) : undefined,
                lastPaymentDate: formData.lastPaymentDate || undefined,
                violationDescription: formData.violationDescription || undefined,
                otherReason: formData.otherReason || undefined,
            },
        });

        router.push('/evictions/new/notice');
    };

    const handleBack = () => {
        saveDraft({
            evictionReason: {
                type: formData.type as any,
                amountOwed: formData.amountOwed ? parseFloat(formData.amountOwed) : undefined,
                lastPaymentDate: formData.lastPaymentDate || undefined,
                violationDescription: formData.violationDescription || undefined,
                otherReason: formData.otherReason || undefined,
            },
        });
        router.push('/evictions/new/lease');
    };

    const reasonOptions = [
        { value: 'non-payment', label: 'Non-Payment of Rent' },
        { value: 'holdover', label: 'Holdover (Lease Expired)' },
        { value: 'lease-violation', label: 'Lease Violation' },
        { value: 'other', label: 'Other' },
    ];

    const selectedReason = formData.type as keyof typeof NOTICE_REQUIREMENTS;
    const noticeInfo = selectedReason ? NOTICE_REQUIREMENTS[selectedReason] : null;

    return (
        <FormLayout
            currentStep={5}
            title="Reason for Eviction"
            description="Select the legal basis for this eviction filing."
        >
            <SelectField
                label="Eviction Reason"
                name="type"
                value={formData.type}
                onChange={handleChange}
                options={reasonOptions}
                error={errors.type}
            />

            {noticeInfo && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    borderLeft: '4px solid #2563eb',
                }}>
                    <strong style={{ color: '#1e40af' }}>Alabama Requirement:</strong>
                    <p style={{ margin: '0.5rem 0 0', color: '#1e40af' }}>{noticeInfo.description}</p>
                </div>
            )}

            {formData.type === 'non-payment' && (
                <>
                    <TextField
                        label="Total Amount Owed ($)"
                        name="amountOwed"
                        type="number"
                        value={formData.amountOwed}
                        onChange={handleChange}
                        placeholder="2400"
                        error={errors.amountOwed}
                        hint="Include all unpaid rent and applicable late fees."
                    />
                    <TextField
                        label="Date of Last Payment"
                        name="lastPaymentDate"
                        type="date"
                        value={formData.lastPaymentDate}
                        onChange={handleChange}
                        hint="Optional - helps establish payment history."
                    />
                </>
            )}

            {formData.type === 'lease-violation' && (
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '14px' }}>
                        Describe the Lease Violation
                    </label>
                    <textarea
                        name="violationDescription"
                        value={formData.violationDescription}
                        onChange={handleChange}
                        placeholder="Unauthorized pets, excessive noise, damage to property..."
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            fontSize: '16px',
                            border: errors.violationDescription ? '1px solid #dc2626' : '1px solid #d1d5db',
                            borderRadius: '6px',
                            minHeight: '100px',
                            resize: 'vertical',
                        }}
                    />
                    {errors.violationDescription && (
                        <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                            {errors.violationDescription}
                        </p>
                    )}
                </div>
            )}

            {formData.type === 'other' && (
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '14px' }}>
                        Specify Reason for Eviction
                    </label>
                    <textarea
                        name="otherReason"
                        value={formData.otherReason}
                        onChange={handleChange}
                        placeholder="Describe the reason for eviction..."
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            fontSize: '16px',
                            border: errors.otherReason ? '1px solid #dc2626' : '1px solid #d1d5db',
                            borderRadius: '6px',
                            minHeight: '100px',
                            resize: 'vertical',
                        }}
                    />
                    {errors.otherReason && (
                        <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                            {errors.otherReason}
                        </p>
                    )}
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button variant="secondary" onClick={handleBack}>
                    ← Back
                </Button>
                <Button onClick={handleNext}>
                    Next: Notice Details →
                </Button>
            </div>
        </FormLayout>
    );
}