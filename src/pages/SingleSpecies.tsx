import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { getSpeciesById } from 'services';
import { Ispecies } from 'types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const SingleSpecies = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [species, setSpecies] = useState<Ispecies | null>();

  useEffect(() => {
    setLoading(true);
    setShowError(false);
    const speciesData = async () => {
      try {
        const res = await getSpeciesById(id!);
        setSpecies(res);
      } catch (errors) {
        setShowError(true);
        const error = errors as Error | AxiosError;
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    speciesData();
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
      minHeight="calc(100vh - 4rem)"
      padding={8}
      sx={{
        justifyContent:
          loading === false && showError === false && species !== null
            ? 'flex-start'
            : 'center',
        alignItems:
          loading === false && showError === false && species !== null
            ? 'flex-start'
            : 'center',
      }}
      style={styles.paperContainer}
    >
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
          {!species ? (
            <Alert severity="warning" variant="filled">
              No data
            </Alert>
          ) : (
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{`${species?.name} | Star Wars`}</title>
                  <meta
                    property="og:title"
                    content={`${species?.name} | Star Wars`}
                  />
                  <meta
                    property="twitter:title"
                    content={`${species?.name} | Star Wars`}
                  />
                </Helmet>
              </HelmetProvider>
              <Typography variant="h2" textAlign="left">
                {species?.name}
              </Typography>
              <Typography variant="h2" component="h1" mt={8} textAlign="left">
                Classification: {species?.classification}
              </Typography>
              <Typography variant="h5" mt={8} textAlign="left">
                Average lifespan in years: {species?.average_lifespan}
              </Typography>
              <Typography mt={8} textAlign="left" maxWidth="60rem">
                Average height: {species?.average_height} cm
              </Typography>
              <Typography mt={8} gutterBottom textAlign="left">
                Language: {species?.language}
              </Typography>
              <Typography textAlign="left">
                Skin colors: {species?.skin_colors}
              </Typography>
            </>
          )}
        </Container>
      ) : (
        ''
      )}
    </Box>
  );
};
