import { AboutMeModel } from './AboutMe';
import { ExperienceModel } from './Experiences';
import { projectType } from './Project';

export interface globalContextType {
  aboutMeData: AboutMeModel[];
  experienceData: ExperienceModel[];
  projectsData: projectType[];
  setLoading: (_loading: boolean) => void;
  loading: boolean;
}
