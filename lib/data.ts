import contentData from '@/data/content.json';
import projectsData from '@/data/projects.json';

export type Project = {
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  category: string;
  date: string;
  featured_image: string;
  images: string[];
  videos: string[];
};

export function getContent() {
  return contentData;
}

export function getProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projectsData.slice(0, count);
}
