import { t } from 'i18next';
import React, { useRef } from 'react';

import { useArchitectProfileApi } from '@/api/architect/profile/use-profile';
import { Bronze } from '@/assets/icons/archimatch/architect-badges/bronze';
import { Gold } from '@/assets/icons/archimatch/architect-badges/gold';
import { Silver } from '@/assets/icons/archimatch/architect-badges/silver';
import { translate } from '@/core';
import type { ProgressBarRef } from '@/shared/components';

export const useProfileSuggestion = () => {
  const { data, isError, isLoading, isPending, isSuccess } =
    useArchitectProfileApi();

  const getProfileLevel = (completion: number) => {
    const levels = [
      { min: 0, max: 25, key: 'beginner' },
      { min: 26, max: 50, key: 'intermediate' },
      { min: 51, max: 75, key: 'advanced' },
      { min: 76, max: 100, key: 'complete' },
    ];

    const level = levels.find(
      (levelItem) => completion >= levelItem.min && completion <= levelItem.max
    );
    return level ? t(level.key) : '';
  };
  const getProfileNextLevel = (completion: number) => {
    const nextLevels = [
      { min: 0, max: 25, key: 'intermediate' },
      { min: 26, max: 50, key: 'advanced' },
      { min: 51, max: 75, key: 'complete' },
    ];

    const level = nextLevels.find(
      (levelItem) => completion >= levelItem.min && completion <= levelItem.max
    );
    return level ? t(level.key) : null;
  };
  const badgeImage =
    data?.badge === 'Gold' ? (
      <Gold />
    ) : data?.badge === 'Silver' ? (
      <Silver />
    ) : data?.badge === 'Bronze' ? (
      <Bronze />
    ) : null; //<Bronze />
  const profileCompletion = data?.profileCompletion ?? 0;
  const profileLevel = getProfileLevel(profileCompletion);
  const profileNextLevel = getProfileNextLevel(profileCompletion);

  const progressBarRef = useRef<ProgressBarRef>(null);
  progressBarRef.current?.setProgress(profileCompletion);

  const suggestionCardsData = [
    {
      id: 0,
      title: translate('architectProfile.SuggestionFirstBlocTitle'),
      description: translate('architectProfile.SuggestionFirstBlocDescription'),
      button: translate('architectProfile.SuggestionFirstBlocButton'),
    },
    {
      id: 1,
      title: translate('architectProfile.SuggestionSecondBlocTitle'),
      description: translate(
        'architectProfile.SuggestionSecondBlocDescription'
      ),
      button: translate('architectProfile.SuggestionSecondBlocButton'),
    },
  ];

  return {
    data,
    isError,
    isLoading,
    isPending,
    isSuccess,
    badgeImage,
    profileLevel,
    progressBarRef,
    profileCompletion,
    profileNextLevel,
    suggestionCardsData,
  };
};
