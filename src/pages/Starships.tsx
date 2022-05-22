import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

import { getStarships } from 'services';
import { IlocalLayout, Istarship } from 'types';
import { LayoutInput, Pagination } from 'components';
import {
  StarshipsRowColLayout,
  StarshipsTableLayout,
} from 'components/starships';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const Starships = () => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [starships, setStarships] = useState<Istarship[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string | null>('1');

  useEffect(() => {
    setLoading(true);
    setShowError(false);
    const starshipsData = async () => {
      try {
        let paramsPage = null;
        if (searchParams.get('page') !== null) {
          setCurrentPage(searchParams.get('page'));
          paramsPage = searchParams.get('page');
        }
        const res = await getStarships(paramsPage);
        setStarships(res.results);
        setPrevPage(
          res.previous ? new URL(res.previous).searchParams.get('page') : null
        );
        setNextPage(
          res.next ? new URL(res.next).searchParams.get('page') : null
        );
      } catch (errors) {
        setShowError(true);
        const error = errors as Error | AxiosError;
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    starshipsData();
  }, [searchParams.get('page')]);

  const [layout, setLayout] = useState<IlocalLayout | null>('row');

  useEffect(() => {
    if (!localStorage.getItem('layout')) {
      setLayout('row');
    } else {
      setLayout(localStorage.getItem('layout') as IlocalLayout);
    }
  }, []);

  const handleChange = (event: IlocalLayout) => {
    setLayout(event);
    localStorage.setItem('layout', `${event}`);
  };

  const styles = {
    paperContainer: {
      background:
        'radial-gradient(87.87% 144.68% at 50% 0%, #0D0D0D 64.98%, #A6A6A6 100%)',
    },
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="calc(100vh - 4rem)"
      sx={{
        justifyContent:
          loading === false && showError === false ? 'flex-start' : 'center',
        padding: { xs: '1rem', md: '4rem' },
      }}
      style={styles.paperContainer}
    >
      <HelmetProvider>
        <Helmet>
          <title>Starships | Star Wars</title>
          <meta property="og:title" content="Starships | Star Wars" />
          <meta property="twitter:title" content="Starships | Star Wars" />
        </Helmet>
      </HelmetProvider>
      {loading === true ? <CircularProgress size={64} /> : ''}
      {showError === true ? (
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      ) : (
        ''
      )}
      {loading === false && showError === false ? (
        <Container maxWidth="xl">
          <Typography variant="h2" component="h1">
            Starships
          </Typography>
          <LayoutInput value={layout} onChangeFunc={handleChange} />
          {layout !== 'table' ? (
            <StarshipsRowColLayout layout={layout} data={starships} />
          ) : (
            <StarshipsTableLayout data={starships} />
          )}
          {prevPage || nextPage ? (
            <Pagination
              currentPage={currentPage}
              prevPage={prevPage}
              nextPage={nextPage}
              setParams={setSearchParams}
            />
          ) : (
            ''
          )}
        </Container>
      ) : (
        ''
      )}
    </Box>
  );
};
