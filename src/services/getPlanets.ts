import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Iplanet } from 'types';

interface Iresponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Iplanet[];
}

export const getPlanets = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `planets?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('planets');
  return response.data;
};

export const getPlanetById = async (id: string) => {
  const response: AxiosResponse<Iplanet> = await api.get(`planets/${id}`);
  return response.data;
};
