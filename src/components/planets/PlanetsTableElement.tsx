import React from 'react';
import { Link } from 'react-router-dom';

import { Iplanet } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  planet: Iplanet;
}

export const PlanetsTableElement: React.FunctionComponent<ItableElement> = ({
  planet,
}) => {
  const slug = new URL(planet.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{planet.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{planet.population}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{planet.climate}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{planet.terrain}</Typography>
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
