import React from 'react'
import Head from 'next/head'
import Auth from './auth'

const Home = () => {
  return (
    <>
      <Head>
        <title>SHK GROUP APPLICATION</title>
      </Head>
      <Auth />
    </>
  )
}

export default Home

