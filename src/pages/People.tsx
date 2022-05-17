import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const People = () => (
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
        <title>People | Star Wars</title>
        <meta property="og:title" content="People | Star Wars" />
        <meta property="twitter:title" content="People | Star Wars" />
      </Helmet>
    </HelmetProvider>
    <Typography variant="h2" component="h1">
      People
    </Typography>
  </Box>
);
