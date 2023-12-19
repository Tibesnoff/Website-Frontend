import React from 'react';
import { DropdownSectionProps } from '../Types/DropdownSectionProps';

const DropdownSection = (props: DropdownSectionProps) => {
  const { expand, setExpand, id } = props;

  const toggleExpanded = (id: number) => {
    setExpand((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id]
    }));
  };

  return (
    <img
      src={'https:\\\\img.icons8.com\\ios-filled\\50\\000000\\expand-arrow.png'}
      alt='expand'
      className={expand ? 'rotate-180' : ''}
      onClick={() => toggleExpanded(id)}
    />
  );
};

export default DropdownSection;
