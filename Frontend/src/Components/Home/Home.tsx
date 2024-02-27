import React from 'react';
import Text from '../../StylizedComponents/Text';
import Title from '../../StylizedComponents/Title';
import { textClassNames } from '../../StylizedComponents/Types/TextType';

const Home = () => {
  return (
    <div className='w-3/4 mx-auto p-4 h-full w-screen'>
      <Title className='rounded-b-none' textClassName={textClassNames.pageTitleClassName}>
        Hello, my name is Tyler Besnoff
      </Title>
      <div className='rounded-b-xl bg-blue-200 size-full flex flex-col justify-center items-center text-center p-3'>
        <Text className='text-xl'>
          I am a Senior at the
          <a href='https://www.pace.edu/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            {`\nPace University, Pleasantville\n`}
          </a>
          campus pursuing a BS in Computer Science. I am creating this webpage as a portfolio for all my work outside of my resume and
          GitHub. I am currently looking for a full-time position in the field of Software Engineering. This webpage is being developed
          using PERN (PostgresSQL, Express JS, React, Node JS). I am hosting this page on AWS Amplify for the front end and have a Docker
          container in an AWS EC2 instance on the backend.
        </Text>
      </div>
    </div>
  );
};

export default Home;
