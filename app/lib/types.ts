export interface EvictionCase {
  id: string;
  createdAt: string;
  status: 'draft' | 'ready' | 'filed';
  
  // Step 1: Property
  property: {
    address: string;
    city: string;
    county: string;
    zip: string;
    propertyType: 'single-family' | 'apartment' | 'mobile-home' | 'other';
  };
  
  // Step 2: Landlord
  landlord: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
  };
  
  // Step 3: Tenant(s)
  tenants: {
    name: string;
    isOnLease: boolean;
  }[];
  
  // Step 4: Lease
  lease: {
    hasWrittenLease: boolean;
    leaseStartDate: string;
    leaseEndDate: string;
    monthlyRent: number;
    securityDeposit: number;
    rentDueDay: number;
  };
  
  // Step 5: Eviction Reason
  evictionReason: {
    type: 'non-payment' | 'holdover' | 'lease-violation' | 'other';
    amountOwed?: number;
    lastPaymentDate?: string;
    violationDescription?: string;
    otherReason?: string;
  };
  
  // Step 6: Notice
  notice: {
    noticeType: '7-day' | '14-day' | '30-day';
    dateServed: string;
    deliveryMethod: 'hand-delivered' | 'posted' | 'certified-mail';
    hasProofOfService: boolean;
  };
}

export const ALABAMA_COUNTIES = [
  'Autauga', 'Baldwin', 'Barbour', 'Bibb', 'Blount', 'Bullock', 'Butler',
  'Calhoun', 'Chambers', 'Cherokee', 'Chilton', 'Choctaw', 'Clarke', 'Clay',
  'Cleburne', 'Coffee', 'Colbert', 'Conecuh', 'Coosa', 'Covington', 'Crenshaw',
  'Cullman', 'Dale', 'Dallas', 'DeKalb', 'Elmore', 'Escambia', 'Etowah',
  'Fayette', 'Franklin', 'Geneva', 'Greene', 'Hale', 'Henry', 'Houston',
  'Jackson', 'Jefferson', 'Lamar', 'Lauderdale', 'Lawrence', 'Lee', 'Limestone',
  'Lowndes', 'Macon', 'Madison', 'Marengo', 'Marion', 'Marshall', 'Mobile',
  'Monroe', 'Montgomery', 'Morgan', 'Perry', 'Pickens', 'Pike', 'Randolph',
  'Russell', 'Shelby', 'St. Clair', 'Sumter', 'Talladega', 'Tallapoosa',
  'Tuscaloosa', 'Walker', 'Washington', 'Wilcox', 'Winston'
] as const;