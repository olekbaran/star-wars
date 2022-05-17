import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AxiosError } from 'axios';

import { getFilms } from 'services';
import { FilmCard } from 'components';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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

export const Films = () => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [films, setFilms] = useState<filmType[]>([]);

  useEffect(() => {
    setLoading(true);
    setShowError(false);
    const filmsData = async () => {
      try {
        const res = await getFilms();
        setFilms(res.results);
      } catch (errors) {
        setShowError(true);
        const error = errors as Error | AxiosError;
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    filmsData();
  }, []);

  const styles = {
    paperContainer: {
      background:
        'radial-gradient(87.87% 144.68% at 50% 0%, #0D0D0D 64.98%, #A6A6A6 100%)',
    },
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="calc(100vh - 4rem)"
      padding={8}
      sx={{
        justifyContent:
          loading === false && showError === false ? 'flex-start' : 'center',
      }}
      style={styles.paperContainer}
    >
      <HelmetProvider>
        <Helmet>
          <title>Films | Star Wars</title>
          <meta property="og:title" content="Films | Star Wars" />
          <meta property="twitter:title" content="Films | Star Wars" />
        </Helmet>
      </HelmetProvider>
      {loading === true ? <CircularProgress size={64} /> : ''}
      {showError === true ? (
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      ) : (
        ''
      )}
      {loading === false && showError === false ? (
        <Container>
          <Typography variant="h2" component="h1">
            Films
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            flexWrap="wrap"
            gap={8}
            mt={8}
          >
            {films.map((film) => (
              <FilmCard key={film.episode_id} film={film} />
            ))}
          </Stack>
        </Container>
      ) : (
        ''
      )}
    </Box>
  );
};
