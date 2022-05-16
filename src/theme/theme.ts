import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#0D0D0D',
    },
    primary: {
      light: '#D9D9D9',
      main: '#A6A6A6',
      dark: '#595959',
    },
    secondary: {
      light: '#262626',
      main: '#0D0D0D',
    },
  },
  typography: {
    allVariants: {
      textAlign: 'center',
      color: '#A6A6A6',
    },
    h2: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 300,
    },
  },
});
