import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import { useGetAnnouncementsApi } from '@/api/client';
import { useCustomForm } from '@/core';
import { getStatus } from '@/core/auth/utils';
import { STATUS_OF_PROJECT } from '@/shared/constants';

import { FilterSchema } from '../schema/filter-schema';

export const useMyProjects = () => {
  const { control } = useCustomForm(FilterSchema, {
    status: '',
  });
  const router = useRouter();
  const [appStatus, setAppStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getStatus();
      setAppStatus(status?.toString() || null);
    };

    fetchStatus();
  }, []);
  const statusOptions = STATUS_OF_PROJECT.map((status) => ({
    label: status,
    value: status,
  }));

  const {
    data: projects,
    isError,
    isLoading,
    isSuccess,
  } = useGetAnnouncementsApi();
  return {
    control,
    router,
    appStatus,
    statusOptions,
    projects,
    isError,
    isLoading,
    isSuccess,
  };
};
