export const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
export const TIMESLOTS = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const VALID_CITIES = [
  'Tunis',
  'Sfax',
  'Sousse',
  'Ettadhamen',
  'Kairouan',
  'Gabès',
  'Bizerte',
  'Ariana',
  'Gafsa',
  'Monastir',
  'Médenine',
  'Beja',
  'Jendouba',
  'Nabeul',
  'Kasserine',
  'Sidi Bouzid',
  'Tozeur',
  'Siliana',
  'Tataouine',
  'Kebili',
  'Ben Arous',
  'Mahdia',
  'Manouba',
  'Zaghouan',
  'Kef',
  'Moknine',
  'Menzel Temime',
] as const;

export const VALID_WORK_SURFACES = [
  '< 40m²',
  '40m² - 90m²',
  '90m² - 200m²',
  '200m² - 500m²',
  '> 500m²',
] as const;

export const IS_FIRST_TIME = 'IS_FIRST_TIME';
export const LOCAL = 'local';

export const STATUS_OF_PROJECT = [
  'Projets en cours',
  'Projets validés',
  'Projets abandonnés',
] as const;
