import React from 'react';

import { IlocalLayout, Ispecies } from 'types';
import { SpeciesCard } from 'components/species';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: IlocalLayout | null;
  data: Ispecies[];
}

export const SpeciesRowColLayout: React.FunctionComponent<IrowColLayout> = ({
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
    {data.map((species) => (
      <SpeciesCard key={species.name} species={species} layout={layout} />
    ))}
  </Stack>
);
