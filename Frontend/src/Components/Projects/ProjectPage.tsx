import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { ProjectModel } from '../../Types/Project';
const ProjectPage = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  return (
    <div className='projectsPage'>
      <h1 className='text-2xl font-bold'>My Projects</h1>
      <h2>The following is a quick list of all of my projects that I have completed</h2>
      <h2>
        Click on a title that interests you to go to its respective github page or click on a project in the projects dropdown to navigate
        to its page
      </h2>
      <br />
      {projectsData.map((project: ProjectModel) => {
        return (
          <h2 key={project.id}>
            <a href={project.githublink} target='blank_'>
              {project.title}
            </a>
          </h2>
        );
      })}
    </div>
  );
};

export default ProjectPage;
