import React from 'react';
import { Link } from 'react-router-dom';

import { IlocalLayout, Ivehicle } from 'types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface IvehicleCard {
  vehicle: Ivehicle;
  layout: IlocalLayout | null;
}

export const VehicleCard: React.FunctionComponent<IvehicleCard> = ({
  vehicle,
  layout,
}) => {
  const slug = new URL(vehicle.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      minHeight="30rem"
      gap={4}
      border={1}
      borderRadius={4}
      bgcolor="secondary.main"
      sx={{
        ...(layout === 'row' && {
          width: { xs: '100%', md: '24rem' },
        }),
        ...(layout === 'column' && {
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          minHeight: { xs: '28rem', md: 'auto' },
        }),
        padding: { xs: '2rem', md: '4rem' },
      }}
    >
      <Typography textAlign="left" fontSize="2.2rem" fontWeight={700}>
        {vehicle.name}
      </Typography>
      <Typography textAlign="left" fontSize="1.2rem" fontWeight={700}>
        Model: {vehicle.model}
      </Typography>
      <Typography textAlign="left">
        Max atmosphering speed (km/h): {vehicle.max_atmosphering_speed}
      </Typography>
      <Typography textAlign="left">
        Consumables: {vehicle.consumables}
      </Typography>
      <Link to={slug} style={{ textDecoration: 'none' }}>
        <Button variant="contained">Check out more</Button>
      </Link>
    </Box>
  );
};
