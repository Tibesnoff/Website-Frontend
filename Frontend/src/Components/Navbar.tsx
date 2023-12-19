import React from 'react';
import globalContext from '../Context/globalContext';
import { globalContextType } from '../Types/globalContextType';

const Navbar = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  const navItemContainer = 'bg-blue-100 h-full w-1/10 p-3 items-center justify-center text-center text-xl font-bold';

  const [showProjects, setShowProjects] = React.useState(false);

  return (
    <div className='flex justify-end space-x-6 pr-6 pl-6 bg-blue-600 items-center h-1/8 border-b-4 border-blue-800'>
      <div className={navItemContainer}>
        <a href='/'>Home</a>
      </div>
      <div className={navItemContainer}>
        <a href='/aboutme'>About Me</a>
      </div>
      <div
        className={`${navItemContainer} relative`}
        onMouseEnter={() => setShowProjects(true)}
        onMouseLeave={() => setShowProjects(false)}
      >
        <a href='/projects'>Projects</a>
        <div className={`absolute top-12 left-0 z-10 flex-col border-2 border-black flex ${showProjects ? '' : 'hidden'}`}>
          {projectsData.map((project) => {
            const title = project.title.split('-')[0];
            return (
              <div key={project.id} className='border-t-2 border-black bg-blue-100 p-3'>
                <a href={`/projects/${title.replaceAll(' ', '').toLowerCase()}`}>{title}</a>
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

/*
<div>
            <a href="/projects/recodejavaapp">Recode Java App</a>
            <a href="/projects/processdeadlocksimulation">
              Process Deadlock Simulation
            </a>
            <a href="/projects/discordbot">Discord Bot</a>
            <a href="/projects/randomfamilyguy">Random Family Guy</a>
            <a href="/projects/rightpay">Right Pay</a>
          </div>
*/
