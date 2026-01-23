'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField, Checkbox } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';

interface Tenant {
    name: string;
    isOnLease: boolean;
}

export default function TenantPage() {
    const router = useRouter();
    const [tenants, setTenants] = useState<Tenant[]>([
        { name: '', isOnLease: true }
    ]);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const currentCase = getCurrentCase();
        if (currentCase?.tenants && currentCase.tenants.length > 0) {
            setTenants(currentCase.tenants);
        }
    }, []);

    const handleNameChange = (index: number, value: string) => {
        const updated = [...tenants];
        updated[index].name = value;
        setTenants(updated);
        if (errors[`tenant_${index}`]) {
            setErrors(prev => ({ ...prev, [`tenant_${index}`]: '' }));
        }
    };

    const handleLeaseChange = (index: number, checked: boolean) => {
        const updated = [...tenants];
        updated[index].isOnLease = checked;
        setTenants(updated);
    };

    const addTenant = () => {
        setTenants([...tenants, { name: '', isOnLease: false }]);
    };

    const removeTenant = (index: number) => {
        if (tenants.length > 1) {
            setTenants(tenants.filter((_, i) => i !== index));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        tenants.forEach((tenant, index) => {
            if (!tenant.name.trim()) {
                newErrors[`tenant_${index}`] = 'Tenant name is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;
        saveDraft({ tenants });
        router.push('/evictions/new/lease');
    };

    const handleBack = () => {
        saveDraft({ tenants });
        router.push('/evictions/new/landlord');
    };

    return (
        <FormLayout
            currentStep={3}
            title="Tenant Information"
            description="List all tenants to be named in the eviction. Include all adults living at the property."
        >
            {tenants.map((tenant, index) => (
                <div
                    key={index}
                    style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <strong>Tenant {index + 1}</strong>
                        {tenants.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeTenant(index)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#dc2626',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                }}
                            >
                                Remove
                            </button>
                        )}
                    </div>

                    <TextField
                        label="Full Legal Name"
                        value={tenant.name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        placeholder="Jane Doe"
                        error={errors[`tenant_${index}`]}
                    />

                    <Checkbox
                        label="This tenant is named on the lease"
                        checked={tenant.isOnLease}
                        onChange={(e) => handleLeaseChange(index, e.target.checked)}
                    />
                </div>
            ))}

            <button
                type="button"
                onClick={addTenant}
                style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px dashed #d1d5db',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    color: '#6b7280',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginBottom: '1rem',
                }}
            >
                + Add Another Tenant
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button variant="secondary" onClick={handleBack}>
                    ← Back
                </Button>
                <Button onClick={handleNext}>
                    Next: Lease Details →
                </Button>
            </div>
        </FormLayout>
    );
}