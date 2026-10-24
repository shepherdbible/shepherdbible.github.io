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

