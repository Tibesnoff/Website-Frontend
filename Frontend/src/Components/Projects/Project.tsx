import React from 'react';
import { ProjectProps } from '../../Types/Project';
import Title from '../../StylizedComponents/Title';
import Text from '../../StylizedComponents/Text';
import { textClassNames } from '../../StylizedComponents/Types/TextType';

const Project = (props: ProjectProps) => {
  const { project } = props;
  return (
    <div>
      <Title textClassName={textClassNames.pageTitleClassName}>{project.name}</Title>
      <div className='p-6'>
        {project.description.map((value, index) => {
          if (value === 'How to Use') {
            return (
              <Text preDefinedClassName={textClassNames.headingClassName} key={index}>
                {value}
              </Text>
            );
          } else
            return (
              <Text className='text-xl' key={index}>
                {value}
              </Text>
            );
        })}
      </div>
    </div>
  );
};

export default Project;
