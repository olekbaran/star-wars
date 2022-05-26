import { AxiosResponse } from 'axios';

import { api } from 'services';
import { Ivehicle } from 'types';

interface Iresponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ivehicle[];
}

export const getVehicles = async (page: string | null) => {
  if (page) {
    const response: AxiosResponse<Iresponse> = await api.get(
      `vehicles?page=${page}`
    );
    return response.data;
  }
  const response: AxiosResponse<Iresponse> = await api.get('vehicles');
  return response.data;
};

export const getVehicleById = async (id: string) => {
  const response: AxiosResponse<Ivehicle> = await api.get(`vehicles/${id}`);
  return response.data;
};
