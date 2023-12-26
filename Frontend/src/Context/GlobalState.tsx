import { PropsWithChildren, useCallback, useEffect } from 'react';
import globalContext from './globalContext';
import React from 'react';
import { AboutMeModel } from '../Types/AboutMe';
import { ExperienceModel } from '../Types/Experiences';
import { ProjectModel } from '../Types/Project';
import { IJsonResponse } from '../Types/jsonResponse';

const newAPIEndpoint = process.env.REACT_APP_NEW_API_URL;

const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [aboutMeData, setAboutMeData] = React.useState<AboutMeModel[]>([]);
  const [experienceData, setExperienceData] = React.useState<ExperienceModel[]>([]);
  const [projectsData, setProjectsData] = React.useState<ProjectModel[]>([]);

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
    await fetch(`${newAPIEndpoint}api/experiences`, {
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
          console.log(r.data);
          setExperienceData(r.data);
        } else {
          console.log(r.error, r.message);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const getProjectData = useCallback(async () => {
    await fetch(`${newAPIEndpoint}api/projects`, {
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
          setProjectsData(r.data);
        } else {
          console.log(r.error, r.message);
        }
      })
      .catch((e) => console.log(e));
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
