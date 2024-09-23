import React, { useState } from 'react';

import { Cash, Home, Location, Map } from '@/assets/icons';
import { translate } from '@/core';
import { Button, Image, Switch, Text, View } from '@/shared/components';
import useFormattedDate from '@/shared/hooks/use-formatted-date';

import type { ProjectCardProps } from '../types';
import { Header } from './header';

export const ProjectCard = ({
  date,
  status,
  workType,
  architectSpeciality,
  propertyType,
  city,
  terrainSurface,
  budget,
  architectesIntéressés,
  searchStatus,
}: ProjectCardProps) => {
  const formattedDate = useFormattedDate(date);
  const [checked, setChecked] = useState(searchStatus);
  return (
    <View className="flex h-fit rounded-2xl bg-white shadow-md shadow-color-shadow ">
      <View className="p-4">
        <Header formattedDate={formattedDate} status={status} />
        <Text className="font-bold text-primary-txt">{workType}</Text>
        <Text className="mb-1 text-sm text-primary">{architectSpeciality}</Text>
        <View className="mt-2 flex flex-row items-center gap-2">
          <Location />
          <Text className="text-sm text-primary-txt">{city}</Text>
        </View>
        <View className="my-4 flex flex-row justify-between">
          <View className="flex flex-row items-center gap-2">
            <Home />
            <Text className="text-sm text-description">{propertyType}</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <Map />
            <Text className="text-sm text-description">{terrainSurface}</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <Cash />
            <Text className="text-sm text-description">{budget}</Text>
          </View>
        </View>
        {architectesIntéressés && (
          <View className="flex flex-row items-center gap-4">
            <View className="flex flex-row pl-3">
              {architectesIntéressés?.map(() => (
                <Image
                  source={require('@/assets/images/architecteImage.jpg')}
                  className="-ml-3 h-11 w-11 rounded-full"
                  alt="tt"
                  contentFit="cover"
                />
              ))}
            </View>
            <Text className="text-sm text-green-600">
              {architectesIntéressés?.length}{' '}
              {translate('projets.interestedArchitects')}
            </Text>
          </View>
        )}
      </View>
      <View className="flex flex-row items-end justify-between bg-light-blue px-4 py-3">
        <View>
          <Text className="text-sm font-bold text-primary-txt">
            {translate('projets.searchStatus')}
          </Text>
          <Text className="text-xs text-primary-txt">
            {translate('projets.signalArchitectFound')}
          </Text>
        </View>
        <Switch
          label=""
          accessibilityLabel=""
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          className="justify-end"
        />
      </View>
      <View className="flex flex-row items-center justify-center gap-4 p-4">
        <Button
          label={translate('projets.cancelProject')}
          onPress={() => {}}
          className="h-12 w-[47%] rounded-lg border border-primary"
          textClassName="text-sm"
          alternativeTextColor="text-primary"
          type="pill"
        />
        <Button
          label={translate('projets.viewArchitects')}
          onPress={() => {}}
          textClassName="text-sm"
          className="h-12 w-[47%] rounded-lg"
        />
      </View>
    </View>
  );
};
