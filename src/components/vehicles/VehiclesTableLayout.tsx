import React from 'react';

import { Ivehicle } from 'types';
import { VehiclesTableElement } from 'components/vehicles';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

interface ItableLayout {
  data: Ivehicle[];
}

export const VehiclesTableLayout: React.FunctionComponent<ItableLayout> = ({
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
              Model
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Max atmosphering speed (km/h)
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Consumables
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
        {data.map((vehicle) => (
          <VehiclesTableElement key={vehicle.name} vehicle={vehicle} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
