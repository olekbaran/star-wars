import React from 'react';

import { Ifilm } from 'types';
import { FilmsTableElement } from 'components/films';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

interface ItableLayout {
  data: Ifilm[];
}

export const FilmsTableLayout: React.FunctionComponent<ItableLayout> = ({
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
          <FilmsTableElement key={film.episode_id} film={film} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
