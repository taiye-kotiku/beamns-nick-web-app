'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField, SelectField, Checkbox } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';
import { getRequiredNotice, calculateNoticeExpiration, isNoticeExpired } from '@/app/lib/alabama-rules';

export default function NoticePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        noticeType: '',
        dateServed: '',
        deliveryMethod: '',
        hasProofOfService: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [evictionType, setEvictionType] = useState<string>('');

    useEffect(() => {
        const currentCase = getCurrentCase();

        if (currentCase?.evictionReason?.type) {
            setEvictionType(currentCase.evictionReason.type);
            const required = getRequiredNotice(currentCase.evictionReason.type);
            setFormData(prev => ({
                ...prev,
                noticeType: required.noticeType,
            }));
        }

        if (currentCase?.notice) {
            setFormData(prev => ({
                ...prev,
                noticeType: currentCase.notice?.noticeType || prev.noticeType,
                dateServed: currentCase.notice?.dateServed || '',
                deliveryMethod: currentCase.notice?.deliveryMethod || '',
                hasProofOfService: currentCase.notice?.hasProofOfService || false,
            }));
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
        if (!formData.dateServed) newErrors.dateServed = 'Date notice was served is required';
        if (!formData.deliveryMethod) newErrors.deliveryMethod = 'Delivery method is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;

        saveDraft({
            notice: {
                noticeType: formData.noticeType as any,
                dateServed: formData.dateServed,
                deliveryMethod: formData.deliveryMethod as any,
                hasProofOfService: formData.hasProofOfService,
            },
        });

        router.push('/evictions/new/review');
    };

    const handleBack = () => {
        saveDraft({
            notice: {
                noticeType: formData.noticeType as any,
                dateServed: formData.dateServed,
                deliveryMethod: formData.deliveryMethod as any,
                hasProofOfService: formData.hasProofOfService,
            },
        });
        router.push('/evictions/new/reason');
    };

    const deliveryOptions = [
        { value: 'hand-delivered', label: 'Hand Delivered to Tenant' },
        { value: 'posted', label: 'Posted on Door' },
        { value: 'certified-mail', label: 'Certified Mail' },
    ];

    const noticeExpired = formData.dateServed && evictionType
        ? isNoticeExpired(formData.dateServed, evictionType as any)
        : false;

    const expirationDate = formData.dateServed && evictionType
        ? calculateNoticeExpiration(formData.dateServed, evictionType as any)
        : null;

    return (
        <FormLayout
            currentStep={6}
            title="Notice to Vacate"
            description="Provide details about the notice you served to the tenant."
        >
            <div style={{
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                borderLeft: '4px solid #f59e0b',
            }}>
                <strong style={{ color: '#92400e' }}>⚠️ Important:</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#92400e', fontSize: '14px' }}>
                    You must serve a proper notice to the tenant and wait for the notice period to expire
                    before filing in court. Filing too early will result in your case being dismissed.
                </p>
            </div>

            <div style={{
                padding: '1rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    <strong>Required Notice Type:</strong> {formData.noticeType || 'N/A'}
                </p>
            </div>

            <TextField
                label="Date Notice Was Served"
                name="dateServed"
                type="date"
                value={formData.dateServed}
                onChange={handleChange}
                error={errors.dateServed}
            />

            {expirationDate && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: noticeExpired ? '#d1fae5' : '#fee2e2',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    borderLeft: `4px solid ${noticeExpired ? '#10b981' : '#ef4444'}`,
                }}>
                    {noticeExpired ? (
                        <p style={{ margin: 0, color: '#065f46' }}>
                            ✅ <strong>Notice period has expired.</strong> You may proceed with filing.
                        </p>
                    ) : (
                        <p style={{ margin: 0, color: '#991b1b' }}>
                            ⏳ <strong>Notice period has NOT expired.</strong> You can file after {expirationDate.toLocaleDateString()}.
                        </p>
                    )}
                </div>
            )}

            <SelectField
                label="How Was the Notice Delivered?"
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleChange}
                options={deliveryOptions}
                error={errors.deliveryMethod}
                hint="Hand delivery or posting on the door is most common."
            />

            <Checkbox
                label="I have proof of service (photo, witness, certified mail receipt)"
                name="hasProofOfService"
                checked={formData.hasProofOfService}
                onChange={handleChange}
                hint="Proof of service strengthens your case if the tenant disputes receiving notice."
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button variant="secondary" onClick={handleBack}>
                    ← Back
                </Button>
                <Button onClick={handleNext}>
                    Next: Review Filing →
                </Button>
            </div>
        </FormLayout>
    );
}