import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { ExperienceModel } from '../../Types/Experiences';
import DropdownSection from '../../Helpers/DropdownSection';

const Experiences = () => {
  const { experienceData } = React.useContext(globalContext) as globalContextType;

  const [expanded, setExpanded] = React.useState<{ [key: number]: boolean }>({});

  React.useEffect(() => {
    const initialExpandedState: { [key: number]: boolean } = {};
    experienceData.forEach((value: ExperienceModel) => {
      initialExpandedState[value.id] = false;
    });
    setExpanded(initialExpandedState);
  }, [experienceData]);

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

  const renderExperienceData = () => {
    return experienceData.map((value: ExperienceModel) => {
      const { id, title, description, location, type, startDate, endDate } = value;
      const isExpanded = expanded[id];

      return (
        <div key={id} className='mt-5'>
          <h1 className='text-2xl'>{title}</h1>
          <h2 className='text-xl'>
            {location} - {type}
          </h2>
          <h3 className='text-lg'>
            {startDate} - {endDate}
          </h3>
          {DropdownSection({ expand: isExpanded, setExpand: setExpanded, id })}
          {isExpanded && renderDropdownSection(description, id)}
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Experiences</h1>
      {renderExperienceData()}
    </div>
  );
};
export default Experiences;
