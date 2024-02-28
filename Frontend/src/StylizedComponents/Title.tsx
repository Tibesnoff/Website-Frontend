import React, { FC } from 'react';
import { textClassNames } from './Types/TextType';
import { TitleProps, titleClassNames } from './Types/TitleType';
import Text from './Text';

const Title: FC<TitleProps> = ({
  backgroundClassName = titleClassNames.defaultClassName,
  textClassName = textClassNames.headingClassName,
  className = '',
  ...rest
}) => {
  const combinedClassName = `${backgroundClassName ?? titleClassNames.defaultClassName} ${className}`;
  return (
    <div className={combinedClassName}>
      <Text preDefinedClassName={textClassName} {...rest} />
    </div>
  );
};

export default Title;
