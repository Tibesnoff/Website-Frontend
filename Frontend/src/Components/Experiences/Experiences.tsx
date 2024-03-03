import React, { useEffect, useRef, useState } from 'react';
import globalContext from '../../Context/globalContext';
import { globalContextType } from '../../Types/globalContextType';
import { ExperienceModel } from '../../Types/Experiences';
import { RenderDescriptionProps, RenderDropdownSectionProps } from '../../Types/DropdownSectionProps';
import { titleClassNames } from '../../StylizedComponents/Types/TitleType';
import { textClassNames } from '../../StylizedComponents/Types/TextType';
import Title from '../../StylizedComponents/Title';
import Text from '../../StylizedComponents/Text';

const Experiences = () => {
  const { experienceData } = React.useContext(globalContext) as globalContextType;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  console.log(experienceData);

  const titleRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    let max = 0;
    experienceData.map(({ id }) => (id > max ? (max = id) : ''));
    titleRefs.current = new Array(max + 1).fill(null).map(() => React.createRef());
  }, [experienceData]);

  useEffect(() => {
    if (expandedId) {
      titleRefs.current[expandedId - 1].current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expandedId]);

  const toggleExpanded = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const RenderDescription = ({ paragraph, id }: RenderDescriptionProps) => {
    return (
      <div className='p-4 pl-8' key={id}>
        <Text className='text-xl'>{paragraph}</Text>
      </div>
    );
  };

  const RenderDropdownSection = ({ description }: RenderDropdownSectionProps) => {
    return (
      <div className='w-full'>
        {description.map((paragraph: string, index: number) => (
          <RenderDescription paragraph={paragraph} key={index} id={index} />
        ))}
      </div>
    );
  };

  const experiencesContent = experienceData.map((value: ExperienceModel) => {
    const { id, title, description } = value;
    const isExpanded = id === expandedId;

    return (
      <div key={id} className='mt-5 w-2/3 flex flex-col justify-center items-center' ref={titleRefs.current[id - 1]}>
        <Title backgroundClassName={titleClassNames.bodyTitleClassName}>{title}</Title>
        <div className='rounded-b-xl bg-blue-200 size-full flex flex-col justify-center items-center'>
          <img
            src={'https:\\\\img.icons8.com\\ios-filled\\50\\000000\\expand-arrow.png'}
            alt='expand'
            className={`${isExpanded ? 'rotate-180' : ''} size-1/15 cursor-pointer`}
            onClick={() => toggleExpanded(id)}
          />
          {isExpanded && <RenderDropdownSection description={description} id={id} />}
        </div>
      </div>
    );
  });

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Title textClassName={textClassNames.pageTitleClassName}>Experiences</Title>
      <div className='flex flex-col content-start justify-center items-center w-full h-full'>{experiencesContent}</div>
    </div>
  );
};
export default Experiences;
