'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function CaseDetailPage() {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        // Redirect to documents page
        router.push(`/evictions/${params.id}/documents`);
    }, [params.id, router]);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <p>Redirecting to documents...</p>
        </div>
    );
}