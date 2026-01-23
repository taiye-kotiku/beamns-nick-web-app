'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearCurrentCase } from '@/app/lib/storage';

export default function NewEvictionPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear any existing draft and start fresh
    clearCurrentCase();
    router.push('/evictions/new/property');
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p>Starting new eviction filing...</p>
    </div>
  );
}