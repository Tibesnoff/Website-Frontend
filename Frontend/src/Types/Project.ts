export interface projectType {
  id: number;
  name: string;
  description: string[];
  github_link: string;
  tags: tag[];
}

export interface tag {
  name: string;
  id: number;
}

export interface ProjectProps {
  project: projectType;
}
