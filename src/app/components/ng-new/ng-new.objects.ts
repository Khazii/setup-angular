import { Category } from 'src/app/models/category.interface';

export const categories: Category[] = [
  {
    label: 'General',
    items: [
      { name: '--dry-run', selected: false },
      { name: '--force', selected: false },
      { name: '--skip-install', selected: false },
      { name: '--skip-tests', selected: false },
      { name: '--skip-git', selected: false },
      { name: '--commit', selected: false },
    ],
    single: false,
  },
  {
    label: 'Style',
    items: [
      { name: '--style=css', selected: false },
      { name: '--style=scss', selected: true },
      { name: '--style=sass', selected: false },
      { name: '--style=less', selected: false },
    ],
    single: true,
  },
  {
    label: 'Routing & State Management',
    items: [
      { name: '--routing', selected: true },
      { name: '--strict', selected: false },
    ],
    single: false,
  },
  {
    label: 'Package Manager',
    items: [
      { name: '--package-manager=npm', selected: false },
      { name: '--package-manager=yarn', selected: false },
      { name: '--package-manager=pnpm', selected: false },
    ],
    single: true,
  },
  {
    label: 'Project Type',
    items: [
      { name: '--create-application', selected: true },
      { name: '--create-application=false', selected: false },
    ],
    single: true,
  },
  {
    label: 'Language',
    items: [
      { name: '--legacy-browsers', selected: false },
      { name: '--inline-style', selected: false },
      { name: '--inline-template', selected: false },
    ],
    single: false,
  },
  {
    label: 'Standalone',
    items: [{ name: '--standalone', selected: false }],
    single: false,
  },
];
