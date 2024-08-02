export type templateChoiceStepThree = {
  id: number;
  image?: string;
  content: string;
  label: string;
  tip?: string;
};
export const templateChoices: templateChoiceStepThree[] = [
  {
    id: 1,
    content: 'Petite',
    label: 'stepThree.small',
    image: '/images/supplier/smallSkeleton.webp',
    tip: 'stepThree.smallSkeletonDesc',
  },
  {
    id: 2,
    content: 'Grande',
    label: 'stepThree.big',
    image: '/images/supplier/bigSkeleton.webp',
    tip: 'stepThree.bigSkeletonDesc',
  },
];
