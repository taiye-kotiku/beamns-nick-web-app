'use client';

const STEPS = [
  { number: 1, label: 'Property' },
  { number: 2, label: 'Landlord' },
  { number: 3, label: 'Tenant' },
  { number: 4, label: 'Lease' },
  { number: 5, label: 'Reason' },
  { number: 6, label: 'Notice' },
  { number: 7, label: 'Review' },
];

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      overflowX: 'auto',
    }}>
      {STEPS.map((step) => (
        <div
          key={step.number}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '70px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '14px',
              backgroundColor:
                step.number < currentStep
                  ? '#10b981'
                  : step.number === currentStep
                  ? '#2563eb'
                  : '#d1d5db',
              color:
                step.number <= currentStep ? 'white' : '#6b7280',
            }}
          >
            {step.number < currentStep ? '✓' : step.number}
          </div>
          <span
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: step.number === currentStep ? '#2563eb' : '#6b7280',
              fontWeight: step.number === currentStep ? 'bold' : 'normal',
            }}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}