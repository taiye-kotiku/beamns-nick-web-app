'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCaseById, getCurrentCase } from '@/app/lib/storage';
import { EvictionCase } from '@/app/lib/types';
import Button from '@/app/components/Button';

export default function DocumentsPage() {
    const params = useParams();
    const router = useRouter();
    const [caseData, setCaseData] = useState<Partial<EvictionCase> | null>(null);
    const [activeDoc, setActiveDoc] = useState<'notice' | 'complaint'>('notice');

    useEffect(() => {
        const id = params.id as string;

        // Try to get from completed cases first
        let data = getCaseById(id);

        // If not found, try current case (for preview)
        if (!data) {
            data = getCurrentCase() as EvictionCase;
        }

        setCaseData(data);
    }, [params.id]);

    const handlePrint = () => {
        window.print();
    };

    if (!caseData) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Loading documents...</p>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            {/* Header - Hidden when printing */}
            <div className="no-print" style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #e5e7eb',
                padding: '1rem',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}>
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Eviction Documents</h1>
                        <p style={{ margin: '0.25rem 0 0', color: '#6b7280', fontSize: '14px' }}>
                            {caseData.property?.address}, {caseData.property?.city}
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <Button variant="secondary" onClick={() => router.push('/evictions')}>
                            ← Back to Cases
                        </Button>
                        <Button onClick={handlePrint}>
                            🖨️ Print / Save PDF
                        </Button>
                    </div>
                </div>
            </div>

            {/* Document Tabs - Hidden when printing */}
            <div className="no-print" style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #e5e7eb',
                padding: '0 1rem',
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
                    <TabButton
                        active={activeDoc === 'notice'}
                        onClick={() => setActiveDoc('notice')}
                    >
                        Notice to Vacate
                    </TabButton>
                    <TabButton
                        active={activeDoc === 'complaint'}
                        onClick={() => setActiveDoc('complaint')}
                    >
                        Eviction Complaint
                    </TabButton>
                </div>
            </div>

            {/* Document Content */}
            <div style={{ padding: '2rem 1rem' }}>
                <div style={{
                    maxWidth: '8.5in',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    padding: '1in',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    minHeight: '11in',
                }}>
                    {activeDoc === 'notice' ? (
                        <NoticeToVacate caseData={caseData} />
                    ) : (
                        <EvictionComplaint caseData={caseData} />
                    )}
                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          @page {
            size: letter;
            margin: 0.5in;
          }
        }
      `}</style>
        </div>
    );
}

function TabButton({
    children,
    active,
    onClick,
}: {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '1rem 0.5rem',
                background: 'none',
                border: 'none',
                borderBottom: active ? '2px solid #2563eb' : '2px solid transparent',
                color: active ? '#2563eb' : '#6b7280',
                fontWeight: active ? '600' : '400',
                cursor: 'pointer',
                fontSize: '14px',
            }}
        >
            {children}
        </button>
    );
}

// Notice to Vacate Document
function NoticeToVacate({ caseData }: { caseData: Partial<EvictionCase> }) {
    const getNoticeDays = () => {
        switch (caseData.evictionReason?.type) {
            case 'non-payment': return '7';
            case 'lease-violation': return '14';
            case 'holdover': return '30';
            default: return '30';
        }
    };

    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div style={{ fontFamily: 'Times New Roman, serif', fontSize: '12pt', lineHeight: '1.6' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '18pt', fontWeight: 'bold', margin: 0 }}>
                    NOTICE TO VACATE
                </h1>
                <p style={{ fontSize: '14pt', margin: '0.5rem 0 0' }}>
                    State of Alabama
                </p>
            </div>

            <p><strong>Date:</strong> {today}</p>

            <p><strong>To:</strong></p>
            <div style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                {caseData.tenants?.map((tenant, i) => (
                    <p key={i} style={{ margin: '0.25rem 0' }}>{tenant.name}</p>
                ))}
                <p style={{ margin: '0.25rem 0' }}>{caseData.property?.address}</p>
                <p style={{ margin: '0.25rem 0' }}>
                    {caseData.property?.city}, Alabama {caseData.property?.zip}
                </p>
            </div>

            <p><strong>From:</strong></p>
            <div style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                <p style={{ margin: '0.25rem 0' }}>{caseData.landlord?.name}</p>
                <p style={{ margin: '0.25rem 0' }}>{caseData.landlord?.address}</p>
                <p style={{ margin: '0.25rem 0' }}>
                    {caseData.landlord?.city}, {caseData.landlord?.state} {caseData.landlord?.zip}
                </p>
            </div>

            <p style={{ marginTop: '1.5rem' }}>
                <strong>RE: Notice to Vacate Premises</strong>
            </p>

            <p>Dear Tenant(s):</p>

            <p>
                You are hereby notified that you are required to vacate and surrender possession
                of the premises located at:
            </p>

            <p style={{ textAlign: 'center', margin: '1rem 0', fontWeight: 'bold' }}>
                {caseData.property?.address}, {caseData.property?.city}, Alabama {caseData.property?.zip}
            </p>

            <p>
                within <strong>{getNoticeDays()} days</strong> from the date of service of this notice,
                for the following reason:
            </p>

            <div style={{
                margin: '1rem 0',
                padding: '1rem',
                border: '1px solid #000',
                backgroundColor: '#f9f9f9',
            }}>
                {caseData.evictionReason?.type === 'non-payment' && (
                    <>
                        <p style={{ margin: 0 }}><strong>Non-Payment of Rent</strong></p>
                        <p style={{ margin: '0.5rem 0 0' }}>
                            Amount owed: ${caseData.evictionReason?.amountOwed?.toLocaleString()}
                        </p>
                        <p style={{ margin: '0.5rem 0 0' }}>
                            Monthly rent: ${caseData.lease?.monthlyRent?.toLocaleString()}
                        </p>
                    </>
                )}
                {caseData.evictionReason?.type === 'holdover' && (
                    <p style={{ margin: 0 }}>
                        <strong>Holdover Tenancy:</strong> Your lease has expired and has not been renewed.
                    </p>
                )}
                {caseData.evictionReason?.type === 'lease-violation' && (
                    <>
                        <p style={{ margin: 0 }}><strong>Lease Violation:</strong></p>
                        <p style={{ margin: '0.5rem 0 0' }}>
                            {caseData.evictionReason?.violationDescription}
                        </p>
                    </>
                )}
                {caseData.evictionReason?.type === 'other' && (
                    <p style={{ margin: 0 }}>{caseData.evictionReason?.otherReason}</p>
                )}
            </div>

            <p>
                If you fail to vacate the premises within the time specified, legal proceedings
                will be initiated against you to recover possession of the premises, along with
                any unpaid rent, damages, court costs, and attorney fees as allowed by law.
            </p>

            <p>
                This notice is given pursuant to Alabama Code § 35-9A-421 and other applicable
                provisions of the Alabama Uniform Residential Landlord and Tenant Act.
            </p>

            <div style={{ marginTop: '3rem' }}>
                <p>Respectfully,</p>
                <div style={{ marginTop: '2rem' }}>
                    <p style={{ borderTop: '1px solid #000', width: '250px', paddingTop: '0.5rem' }}>
                        {caseData.landlord?.name}
                    </p>
                    <p style={{ margin: '0.25rem 0' }}>Landlord/Property Owner</p>
                    <p style={{ margin: '0.25rem 0' }}>Phone: {caseData.landlord?.phone}</p>
                </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
                <p style={{ fontSize: '10pt', fontStyle: 'italic' }}>
                    <strong>Certificate of Service:</strong> I certify that a copy of this notice was served on
                    the above-named tenant(s) on _________________ by:
                </p>
                <p style={{ fontSize: '10pt', marginLeft: '1rem' }}>
                    ☐ Hand delivery<br />
                    ☐ Posting on door<br />
                    ☐ Certified mail
                </p>
            </div>
        </div>
    );
}

// Eviction Complaint Document
function EvictionComplaint({ caseData }: { caseData: Partial<EvictionCase> }) {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div style={{ fontFamily: 'Times New Roman, serif', fontSize: '12pt', lineHeight: '1.6' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>IN THE DISTRICT COURT OF</p>
                <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                    {caseData.property?.county?.toUpperCase()} COUNTY, ALABAMA
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ width: '45%' }}>
                    <p style={{ margin: 0 }}>{caseData.landlord?.name},</p>
                    <p style={{ margin: '0.25rem 0 0', marginLeft: '2rem' }}>Plaintiff,</p>
                    <p style={{ margin: '1rem 0' }}>vs.</p>
                    {caseData.tenants?.map((tenant, i) => (
                        <p key={i} style={{ margin: '0.25rem 0' }}>{tenant.name},</p>
                    ))}
                    <p style={{ margin: '0.25rem 0 0', marginLeft: '2rem' }}>Defendant(s).</p>
                </div>
                <div style={{ width: '45%', textAlign: 'right' }}>
                    <p style={{ margin: 0 }}>Case No.: _________________</p>
                    <p style={{ margin: '1rem 0 0' }}><strong>COMPLAINT FOR</strong></p>
                    <p style={{ margin: 0 }}><strong>UNLAWFUL DETAINER</strong></p>
                    <p style={{ margin: 0 }}><strong>(EVICTION)</strong></p>
                </div>
            </div>

            <div style={{ borderTop: '2px solid #000', marginBottom: '1.5rem' }}></div>

            <p>
                COMES NOW the Plaintiff, {caseData.landlord?.name}, and files this Complaint
                for Unlawful Detainer against the above-named Defendant(s), and states as follows:
            </p>

            <p style={{ marginTop: '1rem' }}>
                <strong>1. PARTIES AND JURISDICTION</strong>
            </p>
            <p style={{ marginLeft: '1rem' }}>
                Plaintiff is the owner/landlord of the property located at {caseData.property?.address},
                {caseData.property?.city}, {caseData.property?.county} County, Alabama {caseData.property?.zip}.
                Defendant(s) {caseData.tenants?.map(t => t.name).join(', ')} {caseData.tenants && caseData.tenants.length > 1 ? 'are' : 'is'} the
                tenant(s) in possession of said premises.
            </p>

            <p style={{ marginTop: '1rem' }}>
                <strong>2. LEASE AGREEMENT</strong>
            </p>
            <p style={{ marginLeft: '1rem' }}>
                {caseData.lease?.hasWrittenLease ? (
                    <>
                        Plaintiff and Defendant(s) entered into a written lease agreement for the
                        above-described premises, with a monthly rent of ${caseData.lease?.monthlyRent?.toLocaleString()},
                        due on the {caseData.lease?.rentDueDay}{getOrdinalSuffix(caseData.lease?.rentDueDay || 1)} of each month.
                    </>
                ) : (
                    <>
                        Plaintiff and Defendant(s) entered into an oral lease agreement for the
                        above-described premises, with a monthly rent of ${caseData.lease?.monthlyRent?.toLocaleString()}.
                    </>
                )}
            </p>

            <p style={{ marginTop: '1rem' }}>
                <strong>3. GROUNDS FOR EVICTION</strong>
            </p>
            <p style={{ marginLeft: '1rem' }}>
                {caseData.evictionReason?.type === 'non-payment' && (
                    <>
                        Defendant(s) have failed to pay rent as required under the lease agreement.
                        The total amount of unpaid rent and charges owed is ${caseData.evictionReason?.amountOwed?.toLocaleString()}.
                    </>
                )}
                {caseData.evictionReason?.type === 'holdover' && (
                    <>
                        The lease term has expired and Defendant(s) have remained in possession of the
                        premises without permission or renewal of the lease.
                    </>
                )}
                {caseData.evictionReason?.type === 'lease-violation' && (
                    <>
                        Defendant(s) have violated the terms of the lease agreement as follows: {caseData.evictionReason?.violationDescription}
                    </>
                )}
                {caseData.evictionReason?.type === 'other' && (
                    <>{caseData.evictionReason?.otherReason}</>
                )}
            </p>

            <p style={{ marginTop: '1rem' }}>
                <strong>4. NOTICE</strong>
            </p>
            <p style={{ marginLeft: '1rem' }}>
                Plaintiff served Defendant(s) with a proper Notice to Vacate on {caseData.notice?.dateServed ?
                    new Date(caseData.notice.dateServed).toLocaleDateString() : '____________'},
                which was delivered by {formatDeliveryMethod(caseData.notice?.deliveryMethod)}.
                The statutory notice period has expired.
            </p>

            <p style={{ marginTop: '1rem' }}>
                <strong>5. UNLAWFUL DETAINER</strong>
            </p>
            <p style={{ marginLeft: '1rem' }}>
                Despite proper notice, Defendant(s) continue to unlawfully occupy the premises.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
                <strong>WHEREFORE</strong>, Plaintiff respectfully requests that this Court:
            </p>
            <ol style={{ marginLeft: '1rem' }}>
                <li>Issue a judgment for possession of the premises in favor of Plaintiff;</li>
                <li>Award Plaintiff unpaid rent in the amount of ${caseData.evictionReason?.amountOwed?.toLocaleString() || '______'};</li>
                <li>Award Plaintiff court costs and other damages as allowed by law;</li>
                <li>Grant such other relief as the Court deems just and proper.</li>
            </ol>

            <div style={{ marginTop: '2rem' }}>
                <p>Respectfully submitted this {today}.</p>
                <div style={{ marginTop: '2rem' }}>
                    <p style={{ borderTop: '1px solid #000', width: '250px', paddingTop: '0.5rem' }}>
                        {caseData.landlord?.name}
                    </p>
                    <p style={{ margin: '0.25rem 0' }}>Plaintiff (Pro Se)</p>
                    <p style={{ margin: '0.25rem 0' }}>{caseData.landlord?.address}</p>
                    <p style={{ margin: '0.25rem 0' }}>
                        {caseData.landlord?.city}, {caseData.landlord?.state} {caseData.landlord?.zip}
                    </p>
                    <p style={{ margin: '0.25rem 0' }}>Phone: {caseData.landlord?.phone}</p>
                </div>
            </div>
        </div>
    );
}

function getOrdinalSuffix(n: number): string {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function formatDeliveryMethod(method?: string): string {
    const methods: Record<string, string> = {
        'hand-delivered': 'hand delivery',
        'posted': 'posting on the door',
        'certified-mail': 'certified mail',
    };
    return method ? methods[method] || method : 'appropriate means';
}