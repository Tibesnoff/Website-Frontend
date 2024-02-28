import React, { FC } from 'react';
import { TextProps, textClassNames } from './Types/TextType';

const Text: FC<TextProps> = ({ preDefinedClassName, className = '', ...rest }) => {
  const mergedClassName = `${preDefinedClassName ?? textClassNames.defaultClassName} ${className}`;

  return <p className={mergedClassName} {...rest} />;
};

export default Text;
