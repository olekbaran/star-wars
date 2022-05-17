import React from 'react';
import { Link } from 'react-router-dom';

import { images } from 'assets/images';

import { appRoutes } from 'app';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const styles = {
  paperContainer: {
    backgroundImage: `url(${images.background404})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
};

export const Error404 = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap={6}
    minHeight="calc(100vh - 4rem)"
    padding={8}
    style={styles.paperContainer}
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={4}
      flexWrap="wrap"
    >
      <Typography variant="h2" component="h1">
        404
      </Typography>
      <Typography variant="h6" component="h2">
        You are in a galaxy far, far away…
      </Typography>
    </Box>
    <Link to={appRoutes.home.slug} style={{ textDecoration: 'none' }}>
      <Button variant="contained" size="large">
        Home page
      </Button>
    </Link>
  </Box>
);
