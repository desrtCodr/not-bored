import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ian Mitchard's Website</title>
        <meta
          name="Ian Mitchard's Website"
          content='Forever Learning'
        />
      </Head>
      <div className='container'>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
