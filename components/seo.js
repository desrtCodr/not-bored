import * as React from 'react';
import Head from 'next/head';

const SEO = ({pageTitle }) => {
  return (
    <Head>
      <title>{ `${pageTitle} - Ian Mitchard`}</title>
    </Head>
  )
}

export default SEO;