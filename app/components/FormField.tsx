'use client';

import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  error?: string;
  hint?: string;
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'tel' | 'number' | 'date';
}

interface SelectProps extends BaseProps, SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const labelStyle = {
  display: 'block',
  marginBottom: '4px',
  fontWeight: '600' as const,
  fontSize: '14px',
  color: '#374151',
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontSize: '16px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  outline: 'none',
};

const errorStyle = {
  color: '#dc2626',
  fontSize: '12px',
  marginTop: '4px',
};

const hintStyle = {
  color: '#6b7280',
  fontSize: '12px',
  marginTop: '4px',
};

export function TextField({ label, error, hint, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={labelStyle}>{label}</label>
      <input
        style={{
          ...inputStyle,
          borderColor: error ? '#dc2626' : '#d1d5db',
        }}
        {...props}
      />
      {error && <p style={errorStyle}>{error}</p>}
      {hint && !error && <p style={hintStyle}>{hint}</p>}
    </div>
  );
}

export function SelectField({ label, options, error, hint, ...props }: SelectProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={labelStyle}>{label}</label>
      <select
        style={{
          ...inputStyle,
          borderColor: error ? '#dc2626' : '#d1d5db',
          backgroundColor: 'white',
        }}
        {...props}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p style={errorStyle}>{error}</p>}
      {hint && !error && <p style={hintStyle}>{hint}</p>}
    </div>
  );
}

export function Checkbox({
  label,
  error,
  hint,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input type="checkbox" {...props} style={{ width: '18px', height: '18px' }} />
        <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
      </label>
      {error && <p style={errorStyle}>{error}</p>}
      {hint && !error && <p style={hintStyle}>{hint}</p>}
    </div>
  );
}