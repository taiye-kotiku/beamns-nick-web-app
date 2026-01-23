'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormLayout from '@/app/components/FormLayout';
import { TextField, SelectField } from '@/app/components/FormField';
import Button from '@/app/components/Button';
import { saveDraft, getCurrentCase } from '@/app/lib/storage';
import { ALABAMA_COUNTIES } from '@/app/lib/types';

export default function PropertyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    county: '',
    zip: '',
    propertyType: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const currentCase = getCurrentCase();
    if (currentCase?.property) {
      setFormData({
        address: currentCase.property.address || '',
        city: currentCase.property.city || '',
        county: currentCase.property.county || '',
        zip: currentCase.property.zip || '',
        propertyType: currentCase.property.propertyType || '',
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.address.trim()) newErrors.address = 'Property address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.county) newErrors.county = 'County is required for filing';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    saveDraft({
      property: {
        address: formData.address,
        city: formData.city,
        county: formData.county,
        zip: formData.zip,
        propertyType: formData.propertyType as any,
      },
    });

    router.push('/evictions/new/landlord');
  };

  const countyOptions = ALABAMA_COUNTIES.map(c => ({ value: c, label: c }));
  
  const propertyTypeOptions = [
    { value: 'single-family', label: 'Single Family Home' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'mobile-home', label: 'Mobile Home' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <FormLayout
      currentStep={1}
      title="Property Details"
      description="Enter the rental property address where the tenant resides."
    >
      <TextField
        label="Street Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="123 Main Street, Apt 4"
        error={errors.address}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Birmingham"
          error={errors.city}
        />
        <TextField
          label="ZIP Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="35203"
          error={errors.zip}
        />
      </div>

      <SelectField
        label="County"
        name="county"
        value={formData.county}
        onChange={handleChange}
        options={countyOptions}
        error={errors.county}
        hint="The county determines which court will handle the filing."
      />

      <SelectField
        label="Property Type"
        name="propertyType"
        value={formData.propertyType}
        onChange={handleChange}
        options={propertyTypeOptions}
        error={errors.propertyType}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <Button onClick={handleNext}>
          Next: Landlord Info →
        </Button>
      </div>
    </FormLayout>
  );
}