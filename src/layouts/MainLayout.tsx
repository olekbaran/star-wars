import React from 'react';

import { Header } from 'components';

import Box from '@mui/material/Box';

type mainLayout = {
  children: JSX.Element;
};

export const MainLayout: React.FunctionComponent<mainLayout> = ({
  children,
}) => (
  <Box minHeight="calc(100vh - 4rem)">
    <Header />
    <Box marginTop={8}>{children}</Box>
  </Box>
);
