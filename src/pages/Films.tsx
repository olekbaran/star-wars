import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AxiosError } from 'axios';

import { getFilms } from 'services';
import { LayoutInput } from 'components';
import { FilmRowCardLayout, FilmTableLayout } from 'components/films';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

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

  const [layout, setLayout] = useState('row');

  useEffect(() => {
    if (
      localStorage.getItem('layout') &&
      localStorage.getItem('layout') !== null
    ) {
      setLayout(localStorage.getItem('layout')!);
    }
  });

  const handleChange = (event: string) => {
    setLayout(event);
    localStorage.setItem('layout', `${event}`);
  };

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
      sx={{
        justifyContent:
          loading === false && showError === false ? 'flex-start' : 'center',
        padding: { xs: '1rem', md: '4rem' },
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
        <Container maxWidth="xl">
          <Typography variant="h2" component="h1">
            Films
          </Typography>
          <LayoutInput value={layout} onChangeFunc={handleChange} />
          {layout !== 'table' ? (
            <FilmRowCardLayout layout={layout} data={films} />
          ) : (
            <FilmTableLayout data={films} />
          )}
        </Container>
      ) : (
        ''
      )}
    </Box>
  );
};
