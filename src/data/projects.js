// KlourkStudio Real Portfolio Projects Dataset

const BASE = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const projects = [
  {
    id: 'biostone',
    index: '01',
    title: 'BioStone',
    categoryLabel: 'Сайт',
    categories: ['sites'],
    link: `${BASE}showcase/biostone/index.html`,
    image: `${BASE}showcase/biostone/preview-card.jpg`,
    video: '',
    aspectRatio: 1.6
  },
  {
    id: 'vaier',
    index: '02',
    title: 'Vaier',
    categoryLabel: 'Сайт',
    categories: ['sites'],
    link: `${BASE}showcase/vaier/index.html`,
    image: `${BASE}showcase/vaier/preview-card.jpg`,
    video: '',
    aspectRatio: 1.6
  },
  {
    id: 'billboard-1',
    index: '03',
    title: 'Билборд',
    categoryLabel: 'Билборд',
    categories: ['billboards'],
    link: `${BASE}showcase/portfolio/billboard-1-large.jpg`,
    image: `${BASE}showcase/portfolio/billboard-1-card.jpg`,
    video: '',
    aspectRatio: 1536 / 1024
  },
  {
    id: 'billboard-2',
    index: '04',
    title: 'Билборд',
    categoryLabel: 'Билборд',
    categories: ['billboards'],
    link: `${BASE}showcase/portfolio/billboard-2-large.jpg`,
    image: `${BASE}showcase/portfolio/billboard-2-card.jpg`,
    video: '',
    aspectRatio: 1600 / 960
  },
  {
    id: 'preview-1',
    index: '05',
    title: 'YouTube Превью',
    categoryLabel: 'Превью',
    categories: ['graphics'],
    link: `${BASE}showcase/portfolio/preview-1-large.jpg`,
    image: `${BASE}showcase/portfolio/preview-1-card.jpg`,
    video: '',
    aspectRatio: 1600 / 900
  }
];

export const categories = [
  { id: 'all', label: 'Все' },
  { id: 'sites', label: 'Сайты' },
  { id: 'billboards', label: 'Билборды' },
  { id: 'graphics', label: 'Превью' }
];
