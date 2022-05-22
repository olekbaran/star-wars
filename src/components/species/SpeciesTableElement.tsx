import React from 'react';
import { Link } from 'react-router-dom';

import { Ispecies } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  species: Ispecies;
}

export const SpeciesTableElement: React.FunctionComponent<ItableElement> = ({
  species,
}) => {
  const slug = new URL(species.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{species.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{species.classification}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{species.designation}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{species.language}</Typography>
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
