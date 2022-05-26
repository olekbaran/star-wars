import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { getVehicleById } from 'services';
import { Ivehicle } from 'types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const Vehicle = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [vehicle, setVehicle] = useState<Ivehicle | null>();

  useEffect(() => {
    setLoading(true);
    setShowError(false);
    const vehicleData = async () => {
      try {
        const res = await getVehicleById(id!);
        setVehicle(res);
      } catch (errors) {
        setShowError(true);
        const error = errors as Error | AxiosError;
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    vehicleData();
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
          loading === false && showError === false && vehicle !== null
            ? 'flex-start'
            : 'center',
        alignItems:
          loading === false && showError === false && vehicle !== null
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
          {!vehicle ? (
            <Alert severity="warning" variant="filled">
              No data
            </Alert>
          ) : (
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{`${vehicle?.name} | Star Wars`}</title>
                  <meta
                    property="og:title"
                    content={`${vehicle?.name} | Star Wars`}
                  />
                  <meta
                    property="twitter:title"
                    content={`${vehicle?.name} | Star Wars`}
                  />
                </Helmet>
              </HelmetProvider>
              <Typography variant="h2" textAlign="left">
                {vehicle?.name}
              </Typography>
              <Typography variant="h2" component="h1" mt={8} textAlign="left">
                Model: {vehicle?.model}
              </Typography>
              <Typography variant="h5" mt={8} textAlign="left">
                Manufacturer: {vehicle?.manufacturer}
              </Typography>
              <Typography mt={8} textAlign="left" maxWidth="60rem">
                Cost in credits: {vehicle?.cost_in_credits}
              </Typography>
              <Typography mt={8} gutterBottom textAlign="left">
                Crew: {vehicle?.crew}
              </Typography>
              <Typography textAlign="left">
                Passengers: {vehicle?.passengers}
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
