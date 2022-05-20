import React from 'react';

import { Ifilm } from 'types';
import { FilmCard } from 'components/films';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: string;
  data: Ifilm[];
}

export const FilmsRowColLayout: React.FunctionComponent<IrowColLayout> = ({
  layout,
  data,
}) => (
  <Stack
    direction="row"
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
      <FilmCard key={film.episode_id} film={film} layout={layout} />
    ))}
  </Stack>
);
