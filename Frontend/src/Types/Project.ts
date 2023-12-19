export interface ProjectModel {
  id: number;
  title: string;
  description: string[];
  githublink: string;
}

export interface ProjectProps {
  project: ProjectModel;
}
