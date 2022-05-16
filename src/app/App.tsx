import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet';

import { appRoutes } from 'app';
import { theme } from 'theme';
import { MainLayout } from 'layouts';
import {
  Home,
  Films,
  People,
  Species,
  Starships,
  Vehicles,
  Error404,
} from 'pages';

import CssBaseline from '@mui/material/CssBaseline';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Star Wars</title>
        <meta property="og:title" content="Star Wars" />
        <meta property="twitter:title" content="Star Wars" />
      </Helmet>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path={appRoutes.home.slug} element={<Home />} />
          <Route path={appRoutes.films.slug} element={<Films />} />
          <Route path={appRoutes.people.slug} element={<People />} />
          <Route path={appRoutes.species.slug} element={<Species />} />
          <Route path={appRoutes.starships.slug} element={<Starships />} />
          <Route path={appRoutes.vehicles.slug} element={<Vehicles />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  </BrowserRouter>
);
