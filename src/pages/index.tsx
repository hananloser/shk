import React from 'react'
import Head from 'next/head'
import { Container } from '../compoents/container'
import { Button } from '../compoents/button'

const Home = () => {
  return (
    <>
      <Head>
        <title>SHK GROUP APPLICATION</title>
      </Head>
      <Container>
        <div className="card bg-gray-700 shadow-lg rounded-md  max-w-md w-1/2 h-1/2">
          <div className="flex justify-center mt-4">
            <span>Card</span>
          </div>
          <div className="card-content">

          </div>
          <div className="card-footer">
            <Button
             onClick={() => alert('test')}
             type='button'
             btnType='normal'
             variant='light'
            >
            Test
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home

