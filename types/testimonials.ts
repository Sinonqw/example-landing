export interface TestimonialData {
  id: number;
  rating: number;
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export interface StarRatingProps {
  rating: number;
}

export interface TestimonialQuoteProps {
  text: string;
}

export interface AuthorInfoProps {
  name: string;
  title: string;
}

export interface SectionHeaderProps {
  title: string;
  description: string;
}