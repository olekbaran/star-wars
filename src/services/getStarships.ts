import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Istarship } from 'types';

interface Iresponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Istarship[];
}

export const getStarships = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `starships?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('starships');
  return response.data;
};

export const getStarshipById = async (id: string) => {
  const response: AxiosResponse<Istarship> = await api.get(`starships/${id}`);
  return response.data;
};
