import React from 'react';
import { Link } from 'react-router-dom';

import { IlocalLayout, Iperson } from 'types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface IpersonCard {
  person: Iperson;
  layout: IlocalLayout | null;
}

export const PersonCard: React.FunctionComponent<IpersonCard> = ({
  person,
  layout,
}) => {
  const slug = new URL(person.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      minHeight="30rem"
      gap={4}
      border={1}
      borderRadius={4}
      bgcolor="secondary.main"
      sx={{
        ...(layout === 'row' && {
          width: { xs: '100%', md: '24rem' },
        }),
        ...(layout === 'column' && {
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          minHeight: { xs: '28rem', md: 'auto' },
        }),
        padding: { xs: '2rem', md: '4rem' },
      }}
    >
      <Typography textAlign="left" fontSize="2.2rem" fontWeight={700}>
        {person.name}
      </Typography>
      <Typography textAlign="left" fontSize="1.2rem" fontWeight={700}>
        Birth year: {person.birth_year}
      </Typography>
      <Typography textAlign="left">Hair color: {person.hair_color}</Typography>
      <Typography textAlign="left">Eye color: {person.eye_color}</Typography>
      <Link to={slug} style={{ textDecoration: 'none' }}>
        <Button variant="contained">Check out more</Button>
      </Link>
    </Box>
  );
};
