import React from 'react';

import { FilmTableElement } from 'components/films';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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

type TableLayoutProps = {
  data: filmType[];
};

export const FilmTableLayout: React.FunctionComponent<TableLayoutProps> = ({
  data,
}) => (
  <TableContainer>
    <Table
      sx={{
        marginTop: '4rem',
        backgroundColor: 'secondary.main',
      }}
      aria-label="films table"
    >
      <TableHead
        sx={{
          backgroundColor: 'primary.main',
        }}
      >
        <TableRow>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Episode
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Title
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Director
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Producer
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Page
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((film) => (
          <FilmTableElement key={film.episode_id} film={film} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
