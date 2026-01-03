export interface Project {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// Page Builder Types

export type SectionType =
  | 'hero'
  | 'text-media'
  | 'card-slider'
  | 'accordion'
  | 'cta-grid'
  | 'features_grid'
  | 'stats';

export interface SectionData {
  // Common properties
  title?: string;
  subtitle?: string;
  content?: string;

  // Specific properties (unions or optional fields)
  image?: string;
  video?: string; // URL to video
  ctaLabel?: string;
  ctaLink?: string;

  items?: any[]; // For lists, sliders, accordions
  layout?: 'left' | 'right' | 'center'; // For TextMedia
}

export interface PageSection {
  id: string;
  type: SectionType;
  data: SectionData;
}

export interface PageConfig {
  id: string;
  title: string;
  sections: PageSection[];
}
