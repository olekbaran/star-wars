import React from 'react';

import { FilmRowCard } from 'components/films';

import Stack from '@mui/material/Stack';

interface filmType {
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

type RowCardLayoutProps = {
  layout: string;
  data: filmType[];
};

export const FilmRowCardLayout: React.FunctionComponent<RowCardLayoutProps> = ({
  layout,
  data,
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    flexWrap="wrap"
    gap={8}
    mt={8}
    sx={{
      ...(layout === 'row' && {
        flexDirection: 'row',
      }),
      ...(layout === 'column' && {
        flexDirection: 'column',
      }),
    }}
  >
    {data.map((film) => (
      <FilmRowCard key={film.episode_id} film={film} layout={layout} />
    ))}
  </Stack>
);
