import '../styles/globals.css';
import Layout from '../components/layout';
import theme from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
