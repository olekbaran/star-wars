import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Iperson } from 'types';

interface Iresponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Iperson[];
}

export const getPeople = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `people?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('people');
  return response.data;
};
