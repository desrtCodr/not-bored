import { Container } from '@mui/system';
import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="Ian Mitchard's Website"
          content='Forever Learning'
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
      </Head>
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
    </>
  );
}
