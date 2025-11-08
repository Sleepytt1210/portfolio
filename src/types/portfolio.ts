export interface Education {
  period: string;
  degree: string;
  institution: string;
  result?: string;
  courses: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  languages: string[];
}
