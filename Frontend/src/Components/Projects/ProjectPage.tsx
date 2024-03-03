import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { projectType, tag } from '../../Types/Project';
import Title from '../../StylizedComponents/Title';
import Text from '../../StylizedComponents/Text';
import { textClassNames } from '../../StylizedComponents/Types/TextType';

const ProjectPage = () => {
  const { projectsData } = React.useContext(globalContext) as globalContextType;

  const tag = (tag: tag) => {
    return (
      <div key={tag.id} className='bg-blue-400 p-1 text-center rounded-lg w-fit h-full text-nowrap'>
        <Text>{tag.name}</Text>
      </div>
    );
  };

  const sortTagsAndTitle = (a: projectType, b: projectType) => {
    const compareTags = () => {
      const tagA = a.tags.map((tag) => tag.name).join('');
      const tagB = b.tags.map((tag) => tag.name).join('');

      return tagA.localeCompare(tagB);
    };

    const compareTitles = () => {
      return a.name.localeCompare(b.name);
    };

    const tagsComparison = compareTags();
    if (tagsComparison !== 0) {
      return tagsComparison;
    } else {
      return compareTitles();
    }
  };

  const projectCard = (project: projectType) => {
    return (
      <a
        href={project.github_link}
        target='_blank'
        rel='noreferrer'
        className='border-2 border-blue-600 h-auto mr-auto mt-10 w-80 text-center bg-blue-200 hover:bg-blue-300'
      >
        <div className='flex flex-nowrap overflow-x-scroll overflow-y-clip space-x-4 no-scrollbar h-10 p-1'>
          {project.tags.map((t) => tag(t))}
        </div>
        <div className='divide-y-2 divide-solid divide-blue-600 p-6 '>
          <Text className='text-2xl font-bold'>{project.name}</Text>
          <Text className='mt-2'>{project.description[0]}</Text>
        </div>
      </a>
    );
  };

  return (
    <div className='projectsPage'>
      <Title className='rounded-b-none' textClassName={textClassNames.pageTitleClassName}>
        My Projects
      </Title>
      <div className='rounded-b-xl bg-blue-200 size-full flex flex-col justify-center items-center text-center p-3'>
        <Text className='text-xl'>
          The following is a quick list of all of my projects that I have completed
          <br />
          Click on a title that interests you to go to its respective github page or click on a project in the projects dropdown to navigate
          to its page
        </Text>
      </div>
      <br />
      <div className='flex h-full mt-auto p-6 justify-start flex-wrap'>
        {projectsData.sort((a, b) => sortTagsAndTitle(a, b)).map((project: projectType) => projectCard(project))}
      </div>
    </div>
  );
};

export default ProjectPage;
