import { Feature } from "./feature";
export interface PricePlan {
  name: string;
  price: string;
  period: string;
  isRecommended: boolean;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
}
