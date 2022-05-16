import React from 'react';

import { images } from 'assets/images';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  paperContainer: {
    backgroundImage: `url(${images.backgroundHome})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
};

export const Home = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap={6}
    minHeight="calc(100vh - 4rem)"
    padding={4}
    style={styles.paperContainer}
  >
    <Typography variant="h2" component="h1">
      STAR WARS
    </Typography>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      <Box>
        <Typography variant="overline" component="p">
          All the Star Wars data you have ever wanted:
        </Typography>
        <Typography
          variant="overline"
          component="p"
          fontSize={14}
          fontWeight={700}
        >
          Planets, Spaceships, Vehicles, People, Films and Species
        </Typography>
      </Box>
      <Box>
        <Typography variant="overline" component="p">
          From all SEVEN Star Wars films
        </Typography>
        <Typography
          variant="overline"
          component="p"
          fontSize={14}
          fontWeight={700}
        >
          May the Force be with you!
        </Typography>
      </Box>
    </Box>
  </Box>
);
