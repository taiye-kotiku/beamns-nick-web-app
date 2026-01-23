import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundColor: '#1e3a5f',
        color: 'white',
        padding: '4rem 1rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 1rem' }}>
            Evict My Tenant Alabama
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            Generate court-ready eviction documents for Alabama in minutes.
            No lawyer required.
          </p>
          <Link href="/evictions/new" style={{
            display: 'inline-block',
            backgroundColor: '#f59e0b',
            color: '#1e3a5f',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textDecoration: 'none',
          }}>
            Start Your Eviction Filing →
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem' }}>
            How It Works
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            <StepCard
              number={1}
              title="Enter Property Details"
              description="Provide information about your rental property and tenants."
            />
            <StepCard
              number={2}
              title="Select Eviction Reason"
              description="Choose from non-payment, holdover, lease violation, or other grounds."
            />
            <StepCard
              number={3}
              title="Generate Documents"
              description="Get court-ready Notice to Vacate and Eviction Complaint forms."
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem' }}>
            Alabama-Specific Compliance
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            <FeatureItem text="7-day notice for non-payment" />
            <FeatureItem text="14-day notice for lease violations" />
            <FeatureItem text="30-day notice for holdover" />
            <FeatureItem text="County-specific court info" />
            <FeatureItem text="Proper legal formatting" />
            <FeatureItem text="Print-ready documents" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Start?</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Complete your eviction filing in about 10 minutes.
        </p>
        <Link href="/evictions/new" style={{
          display: 'inline-block',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}>
          Start New Eviction
        </Link>
      </div>

      {/* Disclaimer */}
      <div style={{
        backgroundColor: '#fef3c7',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '14px', color: '#92400e', margin: 0 }}>
            <strong>Disclaimer:</strong> This service provides document preparation assistance only.
            It is not a law firm and does not provide legal advice. For complex situations,
            consult with a licensed Alabama attorney.
          </p>
        </div>
      </div>
    </main>
  );
}

function StepCard({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#2563eb',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        fontSize: '1.25rem',
        fontWeight: 'bold',
      }}>
        {number}
      </div>
      <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>{description}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
      <span>{text}</span>
    </div>
  );
}