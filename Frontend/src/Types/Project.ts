export interface ProjectModel {
  id: number;
  title: string;
  description: string[];
  githublink: string;
  tags: tag[];
}

export interface tag {
  name: string;
  id: number;
}

export interface ProjectProps {
  project: ProjectModel;
}
