import { GetStaticProps } from 'next'
import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Sidebar from '../../compoents/Sidebar'

interface Props {
    data?: any
}

const Product = ({ }: Props) => {
    return (
        <>
            <Sidebar />
            <MainContent>
                <span>Halaman Products</span>
                <div className="flex justify-center">
                    <table className='table p-3'>
                        <thead className="bg-blue-300">
                            <th>Nama Product</th>
                            <th>Nama Product</th>
                            <th>Nama Product</th>
                            <th>Nama Product</th>
                        </thead>
                    </table>
                </div>
            </MainContent>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const url = 'http://shk-backend.test/api/v1/product'
    const response = await fetch(url)
    const data = await response.json()
    return {
        props: {
            data: data,
        },
        revalidate: 1
    }
}
export default Product
