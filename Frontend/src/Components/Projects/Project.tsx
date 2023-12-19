import React from 'react';
import { ProjectProps } from '../../Types/Project';

const Project = (props: ProjectProps) => {
  const { project } = props;
  return (
    <div>
      <h1 className='text-2xl font-bold'>{project.title}</h1>
      <div className='p-6'>
        {project.description.map((value, index) => {
          if (value === 'How to Use') {
            return (
              <h2 className='text-xl mt-6' key={index}>
                {value}
              </h2>
            );
          } else
            return (
              <p className='mt-6' key={index}>
                {value}
              </p>
            );
        })}
      </div>
    </div>
  );
};

export default Project;
