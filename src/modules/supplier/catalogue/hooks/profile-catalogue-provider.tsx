import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

import { useProfileCatalogue } from './use-profile-catalogue';

interface ProfileCatalogueContextType {
  CollectionData: any;
  isErrorCollection: boolean;
  isLoadingCollection: boolean;
  isSuccessCollection: boolean;
  control: any;
}

const ProfileCatalogueContext = createContext<
  ProfileCatalogueContextType | undefined
>(undefined);

export const ProfileCatalogueProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const profileCatalogue = useProfileCatalogue();

  if (!profileCatalogue) {
    throw new Error(
      'useProfileCatalogue must be used within a ProfileCatalogueProvider'
    );
  }

  return (
    <ProfileCatalogueContext.Provider value={profileCatalogue}>
      {children}
    </ProfileCatalogueContext.Provider>
  );
};

export const useProfileCatalogueContext = (): ProfileCatalogueContextType => {
  const context = useContext(ProfileCatalogueContext);
  if (context === undefined) {
    throw new Error(
      'useProfileCatalogueContext must be used within a ProfileCatalogueProvider'
    );
  }
  return context;
};
