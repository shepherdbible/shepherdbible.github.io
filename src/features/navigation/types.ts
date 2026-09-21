export interface FeatureMenuItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  route: string;
}

export interface FeatureMenuCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: FeatureMenuItem[];
}