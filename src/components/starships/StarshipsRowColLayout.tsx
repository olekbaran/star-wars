import React from 'react';

import { IlocalLayout, Istarship } from 'types';
import { StarshipCard } from 'components/starships';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: IlocalLayout | null;
  data: Istarship[];
}

export const StarshipsRowColLayout: React.FunctionComponent<IrowColLayout> = ({
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
    {data.map((starship) => (
      <StarshipCard key={starship.name} starship={starship} layout={layout} />
    ))}
  </Stack>
);
