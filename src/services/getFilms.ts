import { AxiosResponse } from 'axios';

import { api } from 'services';

interface film {
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
}

type responseData = {
  count: number;
  next: string;
  previous: string;
  results: film[];
};

export const getFilms = async () => {
  const response: AxiosResponse<responseData> = await api.get('films');
  return response.data;
};
