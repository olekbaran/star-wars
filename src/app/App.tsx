import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { appRoutes } from 'app';
import { theme } from 'theme';
import { MainLayout } from 'layouts';
import {
  Home,
  Films,
  Film,
  People,
  Person,
  Planets,
  Planet,
  Species,
  SingleSpecies,
  Starships,
  Starship,
  Vehicles,
  Vehicle,
  Error404,
} from 'pages';

import CssBaseline from '@mui/material/CssBaseline';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Star Wars</title>
          <meta name="description" content="Star Wars Database with SWAPI" />

          <meta property="og:title" content="Star Wars" />
          <meta
            property="og:description"
            content="Star Wars Database with SWAPI"
          />

          <meta property="twitter:title" content="Star Wars" />
          <meta
            property="twitter:description"
            content="Star Wars Database with SWAPI"
          />
        </Helmet>
      </HelmetProvider>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path={appRoutes.home.slug} element={<Home />} />
          <Route path={appRoutes.films.slug} element={<Films />} />
          <Route path={appRoutes.film.slug} element={<Film />} />
          <Route path={appRoutes.people.slug} element={<People />} />
          <Route path={appRoutes.person.slug} element={<Person />} />
          <Route path={appRoutes.planets.slug} element={<Planets />} />
          <Route path={appRoutes.planet.slug} element={<Planet />} />
          <Route path={appRoutes.species.slug} element={<Species />} />
          <Route
            path={appRoutes.singleSpecies.slug}
            element={<SingleSpecies />}
          />
          <Route path={appRoutes.starships.slug} element={<Starships />} />
          <Route path={appRoutes.starship.slug} element={<Starship />} />
          <Route path={appRoutes.vehicles.slug} element={<Vehicles />} />
          <Route path={appRoutes.vehicle.slug} element={<Vehicle />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  </BrowserRouter>
);
