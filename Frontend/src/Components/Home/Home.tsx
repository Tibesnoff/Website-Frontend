import React from 'react';

const Home = () => {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold'>Hello my name is Tyler Besnoff</h1>
      <p>
        <br />I am a Senior at the{' '}
        <a href='https://www.pace.edu/' target='blank_'>
          Pace University, Pleasentville
        </a>{' '}
        campus pursuing a BS in Computer Science
        <br />I am creating this webpage as a portfolio for all my work outside of my resume and GitHub.
        <br />I am currently looking for a full-time position in the field of Software Engineering.
        <br />
        This webpage is being developed using React Typescript and ASP.NET Core C# backend.
        <br />I am hosting this page on AWS Amplify for the front end and AWS Lambda for the backend.
      </p>
    </div>
  );
};

export default Home;
