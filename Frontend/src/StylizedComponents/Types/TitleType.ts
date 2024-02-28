import { HTMLProps } from 'react';
import { textClassNames } from './TextType';

export interface TitleProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
  backgroundClassName?: titleClassNames;
  textClassName?: textClassNames | string;
}

export enum titleClassNames {
  defaultClassName = 'rounded-xl w-full p-4 bg-blue-600 justify-center text-center',
  bodyTitleClassName = 'rounded-xl w-full p-4 bg-blue-400 justify-center text-center mb-0 rounded-b-none'
}
