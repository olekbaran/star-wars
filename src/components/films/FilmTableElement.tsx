import React from 'react';
import { Link } from 'react-router-dom';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface filmType {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

type TableElementProps = {
  film: filmType;
};

export const FilmTableElement: React.FunctionComponent<TableElementProps> = ({
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
