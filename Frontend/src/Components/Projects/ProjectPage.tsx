import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { ProjectModel, tag } from '../../Types/Project';
const ProjectPage = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  const tag = (tag: tag) => {
    return (
      <div key={tag.id} className='bg-blue-400 p-1 text-center rounded-lg w-fit h-full text-nowrap'>
        <h1 className='text-md'>{tag.name}</h1>
      </div>
    );
  };

  const sortTagsAndTitle = (a: ProjectModel, b: ProjectModel) => {
    const compareTags = () => {
      const tagA = a.tags.map((tag) => tag.name).join('');
      const tagB = b.tags.map((tag) => tag.name).join('');

      return tagA.localeCompare(tagB);
    };

    const compareTitles = () => {
      return a.title.localeCompare(b.title);
    };

    const tagsComparison = compareTags();
    if (tagsComparison !== 0) {
      return tagsComparison;
    } else {
      return compareTitles();
    }
  };

  const projectCard = (project: ProjectModel) => {
    return (
      <a
        href={project.githublink}
        target='_blank'
        rel='noreferrer'
        className='border-2 border-blue-600 h-auto mr-auto mt-10 w-80 text-center bg-blue-200 hover:bg-blue-300'
      >
        <div className='flex flex-nowrap overflow-x-scroll overflow-y-clip space-x-4 no-scrollbar h-10 p-1'>
          {project.tags.map((t) => tag(t))}
        </div>
        <div className='divide-y-2 divide-solid divide-blue-600 p-6 '>
          <h1 className='text-2xl'>{project.title}</h1>
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
        {projectsData.sort((a, b) => sortTagsAndTitle(a, b)).map((project: ProjectModel) => projectCard(project))}
      </div>
    </div>
  );
};

export default ProjectPage;
