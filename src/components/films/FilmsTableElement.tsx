import React from 'react';
import { Link } from 'react-router-dom';

import { Ifilm } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  film: Ifilm;
}

export const FilmsTableElement: React.FunctionComponent<ItableElement> = ({
  film,
}) => {
  const slug = new URL(film.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{film.episode_id}.</Typography>
      </TableCell>
      <TableCell>
        <Typography>{film.title}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{film.director}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{film.producer}</Typography>
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
