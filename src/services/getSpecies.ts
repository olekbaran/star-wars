import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Ispecies } from 'types';

interface Iresponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ispecies[];
}

export const getSpecies = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `species?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('species');
  return response.data;
};

export const getSpeciesById = async (id: string) => {
  const response: AxiosResponse<Ispecies> = await api.get(`species/${id}`);
  return response.data;
};
