import React from 'react';
import { Helmet } from 'react-helmet';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Vehicles = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 4rem)"
    padding={4}
  >
    <Helmet>
      <title>Vehicles | Star Wars</title>
      <meta property="og:title" content="Vehicles | Star Wars" />
      <meta property="twitter:title" content="Vehicles | Star Wars" />
    </Helmet>
    <Typography variant="h2" component="h1">
      Vehicles
    </Typography>
  </Box>
);
