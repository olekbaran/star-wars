import React from 'react';

import { Iplanet } from 'types';
import { PlanetsTableElement } from 'components/planets';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

interface ItableLayout {
  data: Iplanet[];
}

export const PlanetsTableLayout: React.FunctionComponent<ItableLayout> = ({
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
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Climate
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Terrain
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
        {data.map((planet) => (
          <PlanetsTableElement key={planet.name} planet={planet} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
