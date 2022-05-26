import React from 'react';
import { Link } from 'react-router-dom';

import { Ivehicle } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  vehicle: Ivehicle;
}

export const VehiclesTableElement: React.FunctionComponent<ItableElement> = ({
  vehicle,
}) => {
  const slug = new URL(vehicle.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{vehicle.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{vehicle.model}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{vehicle.max_atmosphering_speed}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{vehicle.consumables}</Typography>
      </TableCell>
      <TableCell
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to={slug} style={{ textDecoration: 'none' }}>
          <Button variant="contained">Check out more</Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};
