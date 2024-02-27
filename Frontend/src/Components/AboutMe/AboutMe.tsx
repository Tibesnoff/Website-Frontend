import React from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { AboutMeModel } from '../../Types/AboutMe';
import DropdownSection from '../../Helpers/DropdownSection';
import Title from '../../StylizedComponents/Title';
import Text from '../../StylizedComponents/Text';
import { RenderDescriptionProps, RenderDropdownSectionProps } from '../../Types/DropdownSectionProps';
import { textClassNames } from '../../StylizedComponents/Types/TextType';
import { titleClassNames } from '../../StylizedComponents/Types/TitleType';

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

  const RenderDescription = ({ paragraph, index, id }: RenderDescriptionProps) => {
    return (
      <div className='p-4 pl-8' key={`${id}-${index}`}>
        <Text className='text-xl'>{paragraph}</Text>
      </div>
    );
  };

  const RenderDropdownSection = ({ description, id }: RenderDropdownSectionProps) => {
    return (
      <div className='w-full'>
        {description.map((paragraph: string, index: number) => (
          <RenderDescription paragraph={paragraph} index={index} id={id} key={id} />
        ))}
      </div>
    );
  };

  const RenderAboutMeData = () => {
    return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {aboutMeData.map((value: AboutMeModel) => {
          const { id, title, description } = value;
          const isExpanded = expanded[id];

          return (
            <div key={id} className='mt-5 w-2/3 flex flex-col justify-center items-center'>
              <Title backgroundClassName={titleClassNames.bodyTitleClassName}>{title}</Title>
              <div className='rounded-b-xl bg-blue-200 size-full flex flex-col justify-center items-center'>
                <DropdownSection expand={isExpanded} setExpand={setExpanded} id={id} />
                {isExpanded && <RenderDropdownSection description={description} id={id} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Title textClassName={textClassNames.pageTitleClassName}>About Me</Title>
      <RenderAboutMeData />
      <div className='mt-5 w-2/3'>
        <Title backgroundClassName={titleClassNames.bodyTitleClassName}>Contact Information</Title>
        <div className='rounded-b-xl bg-blue-200 w-full justify-center flex'>
          <Text className='text-xl'>
            Cell: <a href='tel:+2158053614'>(215) 805-3614</a>
            <br />
            Email: <a href='mailto:tibesnoff@gmail.com'>tibesnoff@gmail.com</a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
