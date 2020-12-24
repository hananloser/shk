import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import React from 'react';
import { ModalProvider } from '../providers/ModalProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SkeletonTheme color="#aaa6a6" highlightColor="#e6dada" >
      <ModalProvider show={false} >
        <Component {...pageProps} />
      </ModalProvider>
    </SkeletonTheme>
  )
}


export default MyApp;