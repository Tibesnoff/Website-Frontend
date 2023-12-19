import { AboutMeModel } from './AboutMe';
import { ExperienceModel } from './Experiences';
import { ProjectModel } from './Project';

export interface globalContextType {
  aboutMeData: AboutMeModel[];
  experienceData: ExperienceModel[];
  projectsData: ProjectModel[];
  setLoading: (_loading: boolean) => void;
  loading: boolean;
}
