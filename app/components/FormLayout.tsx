'use client';

import { ReactNode } from 'react';
import StepIndicator from './StepIndicator';

interface FormLayoutProps {
  children: ReactNode;
  currentStep: number;
  title: string;
  description?: string;
}

export default function FormLayout({
  children,
  currentStep,
  title,
  description,
}: FormLayoutProps) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '2rem 1rem',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        <StepIndicator currentStep={currentStep} />
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#111827',
          }}>
            {title}
          </h1>
          
          {description && (
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              fontSize: '14px',
            }}>
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}