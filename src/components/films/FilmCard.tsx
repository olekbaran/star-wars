import React from 'react';
import { Link } from 'react-router-dom';

import { Ifilm } from 'types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface IfilmCard {
  film: Ifilm;
  layout: string;
}

export const FilmCard: React.FunctionComponent<IfilmCard> = ({
  film,
  layout,
}) => {
  const slug = new URL(film.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      minHeight="28rem"
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
      <Typography fontSize="3rem" fontWeight={700}>
        {film.episode_id}.
      </Typography>
      <Typography textAlign="left" fontSize="1.2rem" fontWeight={700}>
        {film.title}
      </Typography>
      <Typography textAlign="left">Director: {film.director}</Typography>
      <Typography textAlign="left">Producer: {film.producer}</Typography>
      <Link to={slug} style={{ textDecoration: 'none' }}>
        <Button variant="contained">Check out more</Button>
      </Link>
    </Box>
  );
};
