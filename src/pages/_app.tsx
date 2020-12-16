import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SkeletonTheme color="#aaa6a6" highlightColor="#e6dada" >
      <Component {...pageProps} />
    </SkeletonTheme>
  )
}


export default MyApp;