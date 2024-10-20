import React from 'react';

import { useProfileRealizations } from '../hooks/use-profile-realizations';
import RealizationCard from './card-realization';

export default function RealizationList() {
  const { realizations } = useProfileRealizations();

  return (
    <>
      {realizations?.map((item, index) => {
        return <RealizationCard element={item} indexElement={index} />;
      })}
    </>
  );
}
