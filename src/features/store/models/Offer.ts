export interface RetailerOffer {
  country: string; // ISO 3166-1 alpha-2 (e.g. "PH", "US", "GB", "CA", "AU")
  currency: string; // e.g. "PHP", "USD", "GBP"
  price: number | null;
  retailer: string;
  productUrl: string;
}

export interface StoreProduct {
  id: string;
  title: string;
  version: string; // e.g. "KJV", "NIV", "ESV", "NKJV"
  description: string;
  format?: 'Hardcover' | 'Paperback' | 'Leather-bound' | 'Study Bible' | 'Large Print';
  images: string[];
  offers: RetailerOffer[];
}

export type StoreFilterOptions = {
  searchQuery: string;
  selectedVersion: string;
  selectedFormat: string;
  selectedCountry: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc';
};