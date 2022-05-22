import React from 'react';
import { Link } from 'react-router-dom';

import { Istarship } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  starship: Istarship;
}

export const StarshipsTableElement: React.FunctionComponent<ItableElement> = ({
  starship,
}) => {
  const slug = new URL(starship.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{starship.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{starship.model}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{starship.max_atmosphering_speed}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{starship.consumables}</Typography>
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
