'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import Button from '@/app/components/Button';
import { getCurrentCase, saveCompletedCase, clearCurrentCase } from '@/app/lib/storage';
import { validateFilingReadiness } from '@/app/lib/alabama-rules';
import { EvictionCase } from '@/app/lib/types';

export default function ReviewPage() {
    const router = useRouter();
    const [caseData, setCaseData] = useState<Partial<EvictionCase> | null>(null);
    const [validation, setValidation] = useState<{
        isReady: boolean;
        errors: string[];
        warnings: string[];
    } | null>(null);

    useEffect(() => {
        const currentCase = getCurrentCase();
        setCaseData(currentCase);

        if (currentCase) {
            const result = validateFilingReadiness(currentCase);
            setValidation(result);
        }
    }, []);

    const handleBack = () => {
        router.push('/evictions/new/notice');
    };

    const handleSubmit = () => {
        if (!caseData || !validation?.isReady) return;

        saveCompletedCase(caseData as EvictionCase);
        router.push('/evictions');
    };

    const handleGenerateDocuments = () => {
        if (!caseData) return;

        // Save the case first
        saveCompletedCase(caseData as EvictionCase);

        // Navigate to documents page
        router.push(`/evictions/${caseData.id}/documents`);
    };

    if (!caseData) {
        return (
            <FormLayout currentStep={7} title="Review Your Filing">
                <p>Loading case data...</p>
            </FormLayout>
        );
    }

    const formatDate = (dateString?: string) => {
        if (!dateString) return 'Not provided';
        return new Date(dateString).toLocaleDateString();
    };

    const formatCurrency = (amount?: number) => {
        if (!amount) return 'Not provided';
        return `$${amount.toLocaleString()}`;
    };

    return (
        <FormLayout
            currentStep={7}
            title="Review Your Filing"
            description="Review all information before generating your eviction documents."
        >
            {/* Validation Errors */}
            {validation && validation.errors.length > 0 && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#fee2e2',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    borderLeft: '4px solid #ef4444',
                }}>
                    <strong style={{ color: '#991b1b' }}>❌ Cannot File Yet:</strong>
                    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem', color: '#991b1b' }}>
                        {validation.errors.map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Validation Warnings */}
            {validation && validation.warnings.length > 0 && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#fef3c7',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    borderLeft: '4px solid #f59e0b',
                }}>
                    <strong style={{ color: '#92400e' }}>⚠️ Warnings:</strong>
                    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem', color: '#92400e' }}>
                        {validation.warnings.map((warning, i) => (
                            <li key={i}>{warning}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Ready to File */}
            {validation?.isReady && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#d1fae5',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    borderLeft: '4px solid #10b981',
                }}>
                    <strong style={{ color: '#065f46' }}>✅ Ready to File!</strong>
                    <p style={{ margin: '0.5rem 0 0', color: '#065f46' }}>
                        All requirements have been met. You can generate your eviction documents.
                    </p>
                </div>
            )}

            {/* Property Section */}
            <Section title="Property" onEdit={() => router.push('/evictions/new/property')}>
                <InfoRow label="Address" value={caseData.property?.address} />
                <InfoRow label="City" value={caseData.property?.city} />
                <InfoRow label="County" value={caseData.property?.county} />
                <InfoRow label="ZIP" value={caseData.property?.zip} />
                <InfoRow label="Type" value={caseData.property?.propertyType} />
            </Section>

            {/* Landlord Section */}
            <Section title="Landlord" onEdit={() => router.push('/evictions/new/landlord')}>
                <InfoRow label="Name" value={caseData.landlord?.name} />
                <InfoRow label="Address" value={caseData.landlord?.address} />
                <InfoRow label="Phone" value={caseData.landlord?.phone} />
                <InfoRow label="Email" value={caseData.landlord?.email} />
            </Section>

            {/* Tenants Section */}
            <Section title="Tenants" onEdit={() => router.push('/evictions/new/tenant')}>
                {caseData.tenants?.map((tenant, i) => (
                    <InfoRow
                        key={i}
                        label={`Tenant ${i + 1}`}
                        value={`${tenant.name}${tenant.isOnLease ? ' (on lease)' : ''}`}
                    />
                ))}
            </Section>

            {/* Lease Section */}
            <Section title="Lease Details" onEdit={() => router.push('/evictions/new/lease')}>
                <InfoRow
                    label="Written Lease"
                    value={caseData.lease?.hasWrittenLease ? 'Yes' : 'No'}
                />
                <InfoRow label="Monthly Rent" value={formatCurrency(caseData.lease?.monthlyRent)} />
                <InfoRow label="Rent Due Day" value={caseData.lease?.rentDueDay?.toString()} />
                <InfoRow label="Lease Start" value={formatDate(caseData.lease?.leaseStartDate)} />
                <InfoRow label="Lease End" value={formatDate(caseData.lease?.leaseEndDate)} />
            </Section>

            {/* Eviction Reason Section */}
            <Section title="Eviction Reason" onEdit={() => router.push('/evictions/new/reason')}>
                <InfoRow label="Type" value={formatReasonType(caseData.evictionReason?.type)} />
                {caseData.evictionReason?.type === 'non-payment' && (
                    <InfoRow label="Amount Owed" value={formatCurrency(caseData.evictionReason?.amountOwed)} />
                )}
                {caseData.evictionReason?.type === 'lease-violation' && (
                    <InfoRow label="Violation" value={caseData.evictionReason?.violationDescription} />
                )}
            </Section>

            {/* Notice Section */}
            <Section title="Notice Details" onEdit={() => router.push('/evictions/new/notice')}>
                <InfoRow label="Notice Type" value={caseData.notice?.noticeType} />
                <InfoRow label="Date Served" value={formatDate(caseData.notice?.dateServed)} />
                <InfoRow label="Delivery Method" value={formatDeliveryMethod(caseData.notice?.deliveryMethod)} />
                <InfoRow
                    label="Proof of Service"
                    value={caseData.notice?.hasProofOfService ? 'Yes' : 'No'}
                />
            </Section>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid #e5e7eb',
            }}>
                <Button variant="secondary" onClick={handleBack}>
                    ← Back
                </Button>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button
                        variant="primary"
                        onClick={handleGenerateDocuments}
                        disabled={!validation?.isReady}
                    >
                        Generate Documents 📄
                    </Button>
                </div>
            </div>
        </FormLayout>
    );
}

// Helper Components
function Section({
    title,
    children,
    onEdit,
}: {
    title: string;
    children: React.ReactNode;
    onEdit: () => void;
}) {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
            }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>{title}</h3>
                <button
                    onClick={onEdit}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#2563eb',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                >
                    Edit
                </button>
            </div>
            {children}
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.25rem 0',
            fontSize: '14px',
        }}>
            <span style={{ color: '#6b7280' }}>{label}:</span>
            <span style={{ fontWeight: '500' }}>{value || 'Not provided'}</span>
        </div>
    );
}

// Helper Functions
function formatReasonType(type?: string): string {
    const types: Record<string, string> = {
        'non-payment': 'Non-Payment of Rent',
        'holdover': 'Holdover (Lease Expired)',
        'lease-violation': 'Lease Violation',
        'other': 'Other',
    };
    return type ? types[type] || type : 'Not specified';
}

function formatDeliveryMethod(method?: string): string {
    const methods: Record<string, string> = {
        'hand-delivered': 'Hand Delivered',
        'posted': 'Posted on Door',
        'certified-mail': 'Certified Mail',
    };
    return method ? methods[method] || method : 'Not specified';
}