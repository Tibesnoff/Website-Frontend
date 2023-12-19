export interface DropdownSectionProps {
  expand: boolean;
  setExpand: React.Dispatch<
    React.SetStateAction<{
      [key: number]: boolean;
    }>
  >;
  id: number;
}
