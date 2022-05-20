import React from 'react';

import { Header } from 'components';

import Box from '@mui/material/Box';

interface Ilayout {
  children: React.ReactNode;
}

export const MainLayout: React.FunctionComponent<Ilayout> = ({ children }) => (
  <Box minHeight="calc(100vh - 4rem)">
    <Header />
    <Box marginTop={8}>{children}</Box>
  </Box>
);
