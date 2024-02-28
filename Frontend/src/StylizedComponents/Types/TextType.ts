import { HTMLProps } from 'react';

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
  preDefinedClassName?: textClassNames | string;
}

export enum textClassNames {
  defaultClassName = 'text-md font-normal leading-relaxed mb-4',
  headingClassName = 'text-3xl font-bold text-center mb-4',
  pageTitleClassName = 'text-4xl font-bold text-center mb-4'
}
