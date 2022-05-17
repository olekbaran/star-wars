import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface filmData {
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

type filmCardProps = {
  film: filmData;
};

export const FilmCard: React.FunctionComponent<filmCardProps> = ({ film }) => {
  const slug = new URL(film.url).pathname.replace('/api', '').slice(0, -1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      minHeight="28rem"
      gap={4}
      padding={8}
      border={1}
      borderRadius={4}
      bgcolor="secondary.main"
      sx={{
        width: { xs: '100%', md: '24rem' },
      }}
    >
      <Typography fontSize="3rem" fontWeight={700}>
        {film.episode_id}
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
