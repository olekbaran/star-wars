import React from 'react';

import { Iperson } from 'types';
import { PeopleTableElement } from 'components/people';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

interface ItableLayout {
  data: Iperson[];
}

export const PeopleTableLayout: React.FunctionComponent<ItableLayout> = ({
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
              Birth year
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Hair color
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              fontWeight={700}
              fontSize="1.2rem"
              color="secondary.main"
            >
              Eye color
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
        {data.map((person) => (
          <PeopleTableElement key={person.name} person={person} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
