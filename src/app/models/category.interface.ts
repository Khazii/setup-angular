export interface Category {
  label: string;
  items: Option[];
  single: boolean;
}

interface Option {
  name: string;
  selected: boolean;
}
