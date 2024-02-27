export interface DropdownSectionProps {
  expand: boolean;
  setExpand: React.Dispatch<
    React.SetStateAction<{
      [key: number]: boolean;
    }>
  >;
  id: number;
}

export interface RenderDropdownSectionProps {
  description: string[];
  id: number;
}

export interface RenderDescriptionProps {
  paragraph: string;
  index: number;
  id: number;
}
