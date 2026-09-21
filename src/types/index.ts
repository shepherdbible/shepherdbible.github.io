export interface Page {
  render: () => string;
  mount?: () => void;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  type: 'feature' | 'improvement' | 'fix' | 'security';
}