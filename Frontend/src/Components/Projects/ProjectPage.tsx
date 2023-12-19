import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { ProjectModel } from '../../Types/Project';
const ProjectPage = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  const tag = (name: string) => {
    return <div className='bg-blue-400 p-1 m-1 text-center  rounded-lg w-1/3 '>{name}</div>;
  };

  const sortTags = (a: ProjectModel, b: ProjectModel) => {
    const tagA = a.title.split('-')[1];
    const tagB = b.title.split('-')[1];
    if (tagA && tagB) {
      return tagA.localeCompare(tagB);
    } else if (tagA) {
      return -1;
    } else if (tagB) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  };

  const projectCard = (project: ProjectModel) => {
    const title = project.title.split('-')[0];
    const tagName = project.title.split('-')[1];

    return (
      <a
        href={project.githublink}
        target='_blank'
        rel='noreferrer'
        className='border-2 border-blue-600 h-auto mr-auto mt-10 w-80 text-center bg-blue-200 hover:bg-blue-300'
      >
        {tagName ? tag(tagName) : null}
        <div className='divide-y-2 divide-solid divide-blue-600 p-6 '>
          <h1 className='text-2xl'>{title}</h1>
          <h1 className='mt-2'>{project.description[0]}</h1>
        </div>
      </a>
    );
  };

  return (
    <div className='projectsPage'>
      <h1 className='text-2xl font-bold'>My Projects</h1>
      <h2>The following is a quick list of all of my projects that I have completed</h2>
      <h2>
        Click on a title that interests you to go to its respective github page or click on a project in the projects dropdown to navigate
        to its page
      </h2>
      <br />
      <div className='flex h-full mt-auto p-6 justify-start flex-wrap'>
        {projectsData.sort((a, b) => sortTags(a, b)).map((project: ProjectModel) => projectCard(project))}
      </div>
    </div>
  );
};

export default ProjectPage;
