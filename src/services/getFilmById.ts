import { AxiosResponse } from 'axios';

import { api } from 'services';

type responseData = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
};

export const getFilmById = async (id: string) => {
  const response: AxiosResponse<responseData> = await api.get(`films/${id}`);
  return response.data;
};
