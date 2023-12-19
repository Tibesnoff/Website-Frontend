export interface SheetObject {
  sheetName: string;
  headers: string[];
  sections: Column[];
}

export interface Column {
  header: string;
  values: string[];
}
