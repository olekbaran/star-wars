import React from 'react';
import { Link } from 'react-router-dom';

import { appRoutes } from 'app';
import { Nav } from 'components';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => (
  <AppBar position="fixed" sx={{ height: '4rem', justifyContent: 'center' }}>
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: 'space-between', md: 'space-evenly' },
        }}
      >
        <Link
          to={appRoutes.home.slug}
          style={{ marginRight: '1rem', textDecoration: 'none' }}
        >
          <Typography
            variant="h6"
            component="p"
            noWrap
            color="secondary"
            fontWeight={700}
          >
            STAR WARS
          </Typography>
        </Link>
        <Nav />
      </Toolbar>
    </Container>
  </AppBar>
);
