import { EvictionCase } from './types';

const STORAGE_KEY = 'eviction_cases';
const CURRENT_CASE_KEY = 'current_eviction';

export function generateId(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function saveDraft(data: Partial<EvictionCase>): void {
  if (typeof window === 'undefined') return;
  
  const current = getCurrentCase() || {
    id: generateId(),
    createdAt: new Date().toISOString(),
    status: 'draft' as const,
  };
  
  const updated = { ...current, ...data };
  localStorage.setItem(CURRENT_CASE_KEY, JSON.stringify(updated));
}

export function getCurrentCase(): Partial<EvictionCase> | null {
  if (typeof window === 'undefined') return null;
  
  const data = localStorage.getItem(CURRENT_CASE_KEY);
  return data ? JSON.parse(data) : null;
}

export function clearCurrentCase(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CURRENT_CASE_KEY);
}

export function saveCompletedCase(evictionCase: EvictionCase): void {
  if (typeof window === 'undefined') return;
  
  const cases = getAllCases();
  cases.push({ ...evictionCase, status: 'ready' });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  clearCurrentCase();
}

export function getAllCases(): EvictionCase[] {
  if (typeof window === 'undefined') return [];
  
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function getCaseById(id: string): EvictionCase | null {
  const cases = getAllCases();
  return cases.find(c => c.id === id) || null;
}