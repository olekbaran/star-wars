import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Planets = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 4rem)"
    padding={8}
  >
    <HelmetProvider>
      <Helmet>
        <title>Planets | Star Wars</title>
        <meta property="og:title" content="Planets | Star Wars" />
        <meta property="twitter:title" content="Planets | Star Wars" />
      </Helmet>
    </HelmetProvider>
    <Typography variant="h2" component="h1">
      Planets
    </Typography>
  </Box>
);
