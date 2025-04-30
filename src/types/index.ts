export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  percentage: number;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  languages: string[];
  nationality: string;
  age: number;
  freelance: boolean;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}