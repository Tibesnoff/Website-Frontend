import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import globalContext from './Context/globalContext';
import { globalContextType } from './Types/globalContextType';
import Experiences from './Components/Experiences/Experiences';
import ProjectPage from './Components/Projects/ProjectPage';
import Project from './Components/Projects/Project';
import Resume from './Components/Resume/Resume';

const ProjectDetail = () => {
  const { title } = useParams<{ title: string }>(); // Get the project title from the URL
  const { projectsData } = useContext(globalContext) as globalContextType;

  // Find the project based on the title
  const project = projectsData.find((proj) => {
    const newTitle = proj.name.split('-')[0].replaceAll(' ', '').toLowerCase();
    return newTitle === title;
  });

  return project ? <Project project={project} /> : <div>Project not found</div>;
};

const LoadingComponent = () => <div>Loading...</div>;

const Error404 = () => <div>404 Page Not Found</div>;

const WordpressRedirect = () => {
  window.location.href = 'https://tylerbesnoff.wordpress.com/';
  return <div>Redirecting...</div>;
};

const Website = () => {
  const { loading } = useContext(globalContext) as globalContextType;

  const routes = (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/experiences' element={<Experiences />} />
      <Route path='/projects' element={<ProjectPage />} />
      <Route path='/projects/:title' element={<ProjectDetail />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/wordpress' element={<WordpressRedirect />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );

  const loadingRoutes = (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutme' element={<LoadingComponent />} />
      <Route path='/experiences' element={<LoadingComponent />} />
      <Route path='/projects' element={<LoadingComponent />} />
      <Route path='/projects/:title' element={<LoadingComponent />} />
      <Route path='/wordpress' element={<WordpressRedirect />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );

  const app = <div className='h-full w-full p-6'>{loading ? <Router>{loadingRoutes}</Router> : <Router>{routes}</Router>}</div>;

  return (
    <div className='h-full w-full'>
      <Navbar />
      {app}
    </div>
  );
};

export default Website;
