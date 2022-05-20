import React from 'react';
import { URLSearchParamsInit } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

interface Ipagination {
  currentPage: string | null;
  prevPage: string | null;
  nextPage: string | null;
  setParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Pagination: React.FunctionComponent<Ipagination> = ({
  currentPage,
  prevPage,
  nextPage,
  setParams,
}) => {
  const navigate = (page: string | null) => {
    if (page) {
      setParams({
        page,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" gap={4} mt={8}>
      <Button
        variant="outlined"
        onClick={() => navigate(prevPage)}
        sx={{
          ...(!prevPage && {
            pointerEvents: 'none',
            opacity: '0.3',
          }),
        }}
      >
        <ArrowLeft />
      </Button>
      <Button variant="contained" onClick={scrollToTop}>
        {currentPage}
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate(nextPage)}
        sx={{
          ...(!nextPage && {
            pointerEvents: 'none',
            opacity: '0.3',
          }),
        }}
      >
        <ArrowRight />
      </Button>
    </Box>
  );
};
