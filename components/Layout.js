import Head from 'next/head';
import React from 'react'

export default function Layout({ title, children }) {
  return (
    <>
 <Head>
    <title>{title? title + '-TheLoft':'The Loft liquors'}</title>
    <meta name="description" content="Liquorstore website" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
    </div>
    </>
  );
}
