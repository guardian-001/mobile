import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import {
  getAnnouncementStep7Cities,
  getAnnouncementStep7TerrainSurfaces,
  getAnnouncementStep7WorkSurfaces,
} from '@/services/shared/announcement-service';

import type { CombinedData, Variables } from './types';

const fetchAnnouncementStep7 = async (): Promise<CombinedData> => {
  const [cities, terrainSurfaces, workSurfaces] = await Promise.all([
    getAnnouncementStep7Cities(),
    getAnnouncementStep7TerrainSurfaces(),
    getAnnouncementStep7WorkSurfaces(),
  ]);
  return { cities, terrainSurfaces, workSurfaces };
};

export const useAnnouncementStep7Data = createQuery<
  CombinedData,
  Variables,
  AxiosError
>({
  queryKey: ['announcement-step7'],
  fetcher: fetchAnnouncementStep7,
});
