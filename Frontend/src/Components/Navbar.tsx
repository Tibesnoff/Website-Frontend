import React from 'react';
import globalContext from '../Context/globalContext';
import { globalContextType } from '../Types/globalContextType';

const Navbar = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  const navItemContainer = 'bg-blue-100 hover:bg-blue-200 h-full w-full p-3 items-center justify-center text-center text-xl font-bold ';

  const [showProjects, setShowProjects] = React.useState(false);

  return (
    <div className='flex justify-end w-full space-x-6 pr-6 pl-6 bg-blue-600 items-center h-1/8 border-b-4 border-blue-800'>
      <div className={navItemContainer}>
        <a href='/'>Home</a>
      </div>
      <div className={navItemContainer}>
        <a href='/aboutme'>About Me</a>
      </div>
      <div
        className={`${navItemContainer} relative flex items-center`}
        onMouseEnter={() => setShowProjects(true)}
        onMouseLeave={() => setShowProjects(false)}
      >
        <a href='/projects'>Projects</a>
        <div className={`absolute w-full top-12 left-0 z-10 flex-col border-2 border-black flex ${showProjects ? '' : 'hidden'}`}>
          {projectsData.map((project) => {
            return (
              <div key={project.id} className='border-t-2 w-auto border-black bg-blue-100 hover:bg-blue-200 p-3'>
                <a href={`/projects/${project.title.replaceAll(' ', '').toLowerCase()}`}>{project.title}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={navItemContainer}>
        <a href='/experiences'>Experiences</a>
      </div>
      <div className={navItemContainer}>
        <a className='github-logo' href='https://github.com/Tibesnoff' target='blank_'>
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
