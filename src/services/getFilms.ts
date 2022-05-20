import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Ifilm } from 'types';

interface Iresponse {
  count: number;
  next: string;
  previous: string;
  results: Ifilm[];
}

export const getFilms = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `films?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('films');
  return response.data;
};

export const getFilmById = async (id: string) => {
  const response: AxiosResponse<Ifilm> = await api.get(`films/${id}`);
  return response.data;
};
