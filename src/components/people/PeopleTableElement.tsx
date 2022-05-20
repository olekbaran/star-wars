import React from 'react';
import { Link } from 'react-router-dom';

import { Iperson } from 'types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ItableElement {
  person: Iperson;
}

export const PeopleTableElement: React.FunctionComponent<ItableElement> = ({
  person,
}) => {
  const slug = new URL(person.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{person.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{person.birth_year}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{person.hair_color}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{person.eye_color}</Typography>
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
