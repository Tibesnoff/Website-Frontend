import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { AboutMeModel } from '../../Types/AboutMe';
import DropdownSection from '../../Helpers/DropdownSection';

const AboutMe = () => {
  const { aboutMeData } = React.useContext(globalContext) as globalContextType;

  const [expanded, setExpanded] = React.useState<{ [key: number]: boolean }>({});

  React.useEffect(() => {
    const initialExpandedState: { [key: number]: boolean } = {};
    aboutMeData.forEach((value: AboutMeModel) => {
      initialExpandedState[value.id] = false;
    });
    setExpanded(initialExpandedState);
  }, [aboutMeData]);

  const renderDescription = (paragraph: string, index: number, id: number) => {
    return (
      <div className='p-4 pl-8 w-2/3'>
        <p key={`${id}-${index}`}>{paragraph}</p>
      </div>
    );
  };

  const renderDropdownSection = (description: string[], id: number) => {
    return description.map((paragraph: string, index: number) => renderDescription(paragraph, index, id));
  };

  const renderAboutMeData = () => {
    return aboutMeData.map((value: AboutMeModel) => {
      const { id, title, description } = value;
      const isExpanded = expanded[id];

      return (
        <div key={id} className='mt-5'>
          <h1 className='text-2xl'>{title}</h1>
          {DropdownSection({ expand: isExpanded, setExpand: setExpanded, id })}
          {isExpanded && renderDropdownSection(description, id)}
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>About Me</h1>
      {renderAboutMeData()}
      <div className='mt-5'>
        <h1 className='text-2xl'>Contact Information</h1>
        <p>
          Cell: <a href='tel:+2158053614'>(215) 805-3614</a>
          <br />
          Email: <a href='mailto:tibesnoff@gmail.com'>tibesnoff@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
