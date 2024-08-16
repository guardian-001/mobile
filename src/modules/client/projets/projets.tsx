import React from 'react';
import { StyleSheet } from 'react-native';

import { Cube, Filter, Notification, User } from '@/assets/icons';
import { translate } from '@/core';
import {
  Button,
  colors,
  ControlledSelect,
  EmptyList,
  ErrorData,
  GradientBackground,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { ProjectCard } from './components/project-card';
import { ArchitectesImages } from './dump-data';
import { useMyProjects } from './hooks/use-project';

export default function MyProjects() {
  const {
    control,
    router,
    appStatus,
    statusOptions,
    projects,
    isError,
    isLoading,
    isSuccess,
  } = useMyProjects();
  return (
    <View className="flex-1 bg-white">
      {!appStatus ? (
        <Button
          label={'login'}
          onPress={() => {
            router.replace(`/(client)/(public)/login`);
          }}
          className="mx-4 mt-20 h-12 rounded-md"
        />
      ) : (
        <View className="flex-1">
          <GradientBackground
            colors={[colors.white, colors['extra-light-blue']]}
            style={styles.gradientBachgroud}
          >
            <View className="flex flex-row justify-between">
              <Button
                icon={<User color="white" />}
                onPress={() => {
                  router.push(`/(client)/(profile)/profile`);
                }}
                className="my-8 h-12 w-12 rounded-lg"
              />
              <Button
                icon={<Notification />}
                onPress={() => {}}
                className="my-8 h-12 w-12 rounded-lg bg-white"
              />
            </View>
            <Text
              className="mt-4 text-base font-bold"
              tx="projets.headerTitle"
            />
          </GradientBackground>
          <View className="flex flex-row px-4">
            <View className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-blue">
              <Filter />
            </View>
            <View className="w-7/12">
              <ControlledSelect
                control={control}
                name="status"
                placeholder={translate('projets.status')}
                options={statusOptions}
                icon={<Cube />}
              />
            </View>
          </View>
          {isError && <ErrorData message="Error Loading Data" />}
          {(isLoading || projects?.length === 0) && (
            <EmptyList isLoading={isLoading} />
          )}
          {isSuccess && (
            <ScrollView
              contentContainerClassName="p-4"
              showsVerticalScrollIndicator={false}
            >
              {projects?.map((project) => (
                <ProjectCard
                  date={project.createdAt}
                  status="Pending"
                  workType={project.workType.header}
                  architectSpeciality={project.architectSpeciality.label}
                  propertyType={project.propertyType.label}
                  city={project.city}
                  terrainSurface={project.terrainSurface}
                  budget={project.budget}
                  architectesIntéressés={ArchitectesImages}
                  searchStatus={false}
                />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  gradientBachgroud: { padding: 16 },
});
