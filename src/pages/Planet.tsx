import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { getPlanetById } from 'services';
import { Iplanet } from 'types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const Planet = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [planet, setPlanet] = useState<Iplanet | null>();

  useEffect(() => {
    setLoading(true);
    setShowError(false);
    const planetData = async () => {
      try {
        const res = await getPlanetById(id!);
        setPlanet(res);
      } catch (errors) {
        setShowError(true);
        const error = errors as Error | AxiosError;
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    planetData();
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
          loading === false && showError === false && planet !== null
            ? 'flex-start'
            : 'center',
        alignItems:
          loading === false && showError === false && planet !== null
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
          {!planet ? (
            <Alert severity="warning" variant="filled">
              No data
            </Alert>
          ) : (
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{`${planet?.name} | Star Wars`}</title>
                  <meta
                    property="og:title"
                    content={`${planet?.name} | Star Wars`}
                  />
                  <meta
                    property="twitter:title"
                    content={`${planet?.name} | Star Wars`}
                  />
                </Helmet>
              </HelmetProvider>
              <Typography variant="h2" textAlign="left">
                {planet?.name}
              </Typography>
              <Typography variant="h2" component="h1" mt={8} textAlign="left">
                Climate: {planet?.climate}
              </Typography>
              <Typography variant="h5" mt={8} textAlign="left">
                Diameter: {planet?.diameter}
              </Typography>
              <Typography mt={8} textAlign="left" maxWidth="60rem">
                Surface Water: {planet?.surface_water}
              </Typography>
              <Typography mt={8} gutterBottom textAlign="left">
                Rotation period: {planet.rotation_period} hours
              </Typography>
              <Typography textAlign="left">
                Orbital period: {planet?.orbital_period} days
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
