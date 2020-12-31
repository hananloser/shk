import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ModalProvider } from '../providers/ModalProvider';
import { PopupProvider } from '../providers/PopupProvider';
import { Provider } from 'react-redux';
import Store from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={Store}  >
      <SkeletonTheme color="#aaa6a6" highlightColor="#e6dada" >
        <ModalProvider show={false} >
          <PopupProvider show={false}>
            <Component {...pageProps} />
          </PopupProvider>
        </ModalProvider>
      </SkeletonTheme>
    </Provider>
  )
}


export default MyApp;