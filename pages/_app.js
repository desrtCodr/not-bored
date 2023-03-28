import '../styles/globals.css';
import Layout from '../components/layout';
import { Inconsolata } from '@next/font/google';

// const myFont =

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
