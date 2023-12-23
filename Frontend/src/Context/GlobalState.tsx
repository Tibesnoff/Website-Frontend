import { PropsWithChildren, useCallback, useEffect } from 'react';
import globalContext from './globalContext';
import React from 'react';
import { AboutMeModel } from '../Types/AboutMe';
import { ExperienceModel } from '../Types/Experiences';
import { ProjectModel } from '../Types/Project';
import { IJsonResponse } from '../Types/jsonResponse';

const endpoint = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const newAPIEndpoint = process.env.REACT_APP_NEW_API_URL;

const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [aboutMeData, setAboutMeData] = React.useState<AboutMeModel[]>([]);
  const [experienceData, setExperienceData] = React.useState<ExperienceModel[]>([]);
  const [projectsData, setProjectsData] = React.useState<ProjectModel[]>([]);

  const getSheetData = async (sheetName: string) => {
    return fetch(`${endpoint}api/GoogleSheets/${sheetName}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${apiKey}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': 'true'
      },
      method: 'GET'
    })
      .then((r) => {
        return r.json();
      })
      .catch((e) => console.log(e));
  };

  const getAboutMeData = useCallback(async () => {
    await fetch(`${newAPIEndpoint}api/aboutme`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': 'true'
      },
      method: 'GET'
    })
      .then(async (r) => (await r.json()) as IJsonResponse)
      .then((r) => {
        if (r.success) {
          setAboutMeData(r.data);
        } else {
          console.log(r.error, r.message);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const getExperienceData = useCallback(async () => {
    const data = await getSheetData('experiences');
    const sections = data.map((experience: ExperienceModel, index: number) => {
      return {
        id: index,
        title: experience.title,
        description: experience.description,
        location: experience.location,
        type: experience.type,
        startDate: experience.startDate,
        endDate: experience.endDate
      };
    });

    setExperienceData(sections);
  }, []);

  const getProjectData = useCallback(async () => {
    const data = await getSheetData('projects');
    const sections = data.map((project: ProjectModel, index: number) => {
      return {
        id: index,
        title: project.title,
        description: project.description,
        githublink: project.githublink
      };
    });

    setProjectsData(sections);
  }, []);

  const getAllData = useCallback(async () => {
    setLoading(true);
    await getAboutMeData();
    await getExperienceData();
    await getProjectData();
    setLoading(false);
  }, [getAboutMeData, getExperienceData]);

  useEffect(() => {
    getAllData();
  }, [getAboutMeData, getExperienceData]);

  return (
    <globalContext.Provider
      value={{
        aboutMeData,
        experienceData,
        projectsData,
        setLoading,
        loading
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalState;
