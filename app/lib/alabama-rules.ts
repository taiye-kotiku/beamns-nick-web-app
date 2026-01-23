import { EvictionCase } from './types';

export const NOTICE_REQUIREMENTS = {
  'non-payment': {
    noticeDays: 7,
    noticeType: '7-day' as const,
    description: 'For unpaid rent, Alabama requires a 7-day notice to pay or quit.',
  },
  'holdover': {
    noticeDays: 30,
    noticeType: '30-day' as const,
    description: 'For holdover tenants (lease expired), Alabama requires a 30-day notice.',
  },
  'lease-violation': {
    noticeDays: 14,
    noticeType: '14-day' as const,
    description: 'For lease violations, Alabama requires a 14-day notice to cure or quit.',
  },
  'other': {
    noticeDays: 30,
    noticeType: '30-day' as const,
    description: 'For other reasons, a 30-day notice is typically required.',
  },
};

export function getRequiredNotice(reasonType: EvictionCase['evictionReason']['type']) {
  return NOTICE_REQUIREMENTS[reasonType];
}

export function calculateNoticeExpiration(dateServed: string, reasonType: EvictionCase['evictionReason']['type']): Date {
  const served = new Date(dateServed);
  const days = NOTICE_REQUIREMENTS[reasonType].noticeDays;
  const expiration = new Date(served);
  expiration.setDate(expiration.getDate() + days);
  return expiration;
}

export function isNoticeExpired(dateServed: string, reasonType: EvictionCase['evictionReason']['type']): boolean {
  const expiration = calculateNoticeExpiration(dateServed, reasonType);
  return new Date() >= expiration;
}

export function validateFilingReadiness(evictionCase: Partial<EvictionCase>): {
  isReady: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  if (!evictionCase.property?.address) errors.push('Property address is required');
  if (!evictionCase.property?.county) errors.push('County is required for filing');
  if (!evictionCase.landlord?.name) errors.push('Landlord name is required');
  if (!evictionCase.tenants?.length) errors.push('At least one tenant must be listed');
  if (!evictionCase.evictionReason?.type) errors.push('Eviction reason is required');
  if (!evictionCase.notice?.dateServed) errors.push('Notice serve date is required');

  // Check notice timing
  if (evictionCase.notice?.dateServed && evictionCase.evictionReason?.type) {
    if (!isNoticeExpired(evictionCase.notice.dateServed, evictionCase.evictionReason.type)) {
      const expiration = calculateNoticeExpiration(
        evictionCase.notice.dateServed,
        evictionCase.evictionReason.type
      );
      errors.push(`Notice period has not expired. You can file after ${expiration.toLocaleDateString()}`);
    }
  }

  // Warnings
  if (!evictionCase.notice?.hasProofOfService) {
    warnings.push('Proof of service is recommended for court');
  }
  if (!evictionCase.lease?.hasWrittenLease) {
    warnings.push('Cases without written leases may require additional documentation');
  }

  return {
    isReady: errors.length === 0,
    errors,
    warnings,
  };
}