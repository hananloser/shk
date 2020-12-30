import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ModalProvider } from '../providers/ModalProvider';
import { PopupProvider } from '../providers/PopupProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SkeletonTheme color="#aaa6a6" highlightColor="#e6dada" >
      <ModalProvider show={false} >
        <PopupProvider show={false}>
          <Component {...pageProps} />
        </PopupProvider>
      </ModalProvider>
    </SkeletonTheme>
  )
}


export default MyApp;