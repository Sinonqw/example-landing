export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  feature: FeatureItem;
}

export interface SectionHeaderProps {
  title: string;
  description: string;
}
