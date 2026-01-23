'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';

export default function LandlordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const currentCase = getCurrentCase();
    if (currentCase?.landlord) {
      setFormData({
        name: currentCase.landlord.name || '',
        address: currentCase.landlord.address || '',
        city: currentCase.landlord.city || '',
        state: currentCase.landlord.state || 'Alabama',
        zip: currentCase.landlord.zip || '',
        phone: currentCase.landlord.phone || '',
        email: currentCase.landlord.email || '',
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    saveDraft({
      landlord: formData,
    });

    router.push('/evictions/new/tenant');
  };

  const handleBack = () => {
    saveDraft({ landlord: formData });
    router.push('/evictions/new/property');
  };

  return (
    <FormLayout
      currentStep={2}
      title="Landlord Information"
      description="Enter your information as the property owner or authorized agent."
    >
      <TextField
        label="Full Legal Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Smith"
        error={errors.name}
        hint="As it should appear on court documents."
      />

      <TextField
        label="Mailing Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="456 Owner Lane"
        error={errors.address}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Montgomery"
          error={errors.city}
        />
        <TextField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Alabama"
        />
        <TextField
          label="ZIP Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="36104"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(205) 555-1234"
          error={errors.phone}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          hint="Optional, but recommended for court communications."
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <Button variant="secondary" onClick={handleBack}>
          ← Back
        </Button>
        <Button onClick={handleNext}>
          Next: Tenant Info →
        </Button>
      </div>
    </FormLayout>
  );
}