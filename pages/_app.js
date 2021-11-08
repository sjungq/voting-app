import '../styles/utilities/normalize.css';
import Navbar from '../components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#455a64',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#26c6da',
    },
  },
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
