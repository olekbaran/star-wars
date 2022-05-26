import React from 'react';

import { IlocalLayout, Ivehicle } from 'types';
import { VehicleCard } from 'components/vehicles';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: IlocalLayout | null;
  data: Ivehicle[];
}

export const VehiclesRowColLayout: React.FunctionComponent<IrowColLayout> = ({
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
    {data.map((vehicle) => (
      <VehicleCard key={vehicle.name} vehicle={vehicle} layout={layout} />
    ))}
  </Stack>
);
