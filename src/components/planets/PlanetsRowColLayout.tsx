import React from 'react';

import { IlocalLayout, Iplanet } from 'types';
import { PlanetCard } from 'components/planets';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: IlocalLayout | null;
  data: Iplanet[];
}

export const PlanetsRowColLayout: React.FunctionComponent<IrowColLayout> = ({
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
    {data.map((planet) => (
      <PlanetCard key={planet.name} planet={planet} layout={layout} />
    ))}
  </Stack>
);
