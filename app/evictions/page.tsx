'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllCases } from '@/app/lib/storage';
import { EvictionCase } from '@/app/lib/types';
import Button from '@/app/components/Button';

export default function EvictionsPage() {
  const [cases, setCases] = useState<EvictionCase[]>([]);

  useEffect(() => {
    setCases(getAllCases());
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '2rem 1rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}>
          <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 'bold' }}>
            My Eviction Cases
          </h1>
          <Link href="/evictions/new">
            <Button>+ New Eviction</Button>
          </Link>
        </div>

        {cases.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '1.5rem' }}>
              You haven&apos;t started any eviction filings yet.
            </p>
            <Link href="/evictions/new">
              <Button>Start Your First Eviction</Button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cases.map((evictionCase) => (
              <div
                key={evictionCase.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>
                      {evictionCase.property?.address || 'No address'}
                    </h3>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                      {evictionCase.property?.city}, {evictionCase.property?.county} County
                    </p>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '14px' }}>
                      <strong>Tenant:</strong> {evictionCase.tenants?.[0]?.name || 'Unknown'}
                      {evictionCase.tenants && evictionCase.tenants.length > 1 && (
                        <span> (+{evictionCase.tenants.length - 1} more)</span>
                      )}
                    </p>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '14px' }}>
                      <strong>Reason:</strong> {formatReasonType(evictionCase.evictionReason?.type)}
                    </p>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: evictionCase.status === 'ready' ? '#d1fae5' : '#e5e7eb',
                      color: evictionCase.status === 'ready' ? '#065f46' : '#374151',
                    }}>
                      {evictionCase.status === 'ready' ? 'Ready to File' : 'Draft'}
                    </span>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '12px', color: '#9ca3af' }}>
                      Created: {new Date(evictionCase.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e5e7eb',
                }}>
                  <Link href={`/evictions/${evictionCase.id}/documents`}>
                    <Button variant="primary">View Documents</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatReasonType(type?: string): string {
  const types: Record<string, string> = {
    'non-payment': 'Non-Payment of Rent',
    'holdover': 'Holdover',
    'lease-violation': 'Lease Violation',
    'other': 'Other',
  };
  return type ? types[type] || type : 'Not specified';
}