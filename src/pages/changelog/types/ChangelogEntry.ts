export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  type: 'feature' | 'improvement' | 'fix' | 'security';
  platforms?: string[]
}