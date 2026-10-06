export interface Service {
  slug: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
  label: "Personal Project" | "Demo Project" | "Concept Project" | "Client Project";
}

export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}