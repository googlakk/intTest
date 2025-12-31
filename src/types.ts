
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
