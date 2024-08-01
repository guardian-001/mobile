import CreateProfile from './steps/create-profile';
import InterestPick from './steps/intrest-pick';

export const stepsContent: {
  component: React.ReactNode;
}[] = [
  {
    component: <CreateProfile />,
  },
  {
    component: <InterestPick />,
  },
];
