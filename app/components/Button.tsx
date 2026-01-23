'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600' as const,
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background-color 0.2s',
  };

  const variants = {
    primary: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      border: '1px solid #d1d5db',
    },
    danger: {
      backgroundColor: '#dc2626',
      color: 'white',
    },
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...style }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}