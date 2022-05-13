import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const People = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 4rem)"
    padding={4}
  >
    <Typography
      variant="h2"
      component="h1"
      color="primary.main"
      fontWeight={700}
      textAlign="center"
    >
      People
    </Typography>
  </Box>
);
