import { GetStaticProps } from 'next'
import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'
import { Product as Iproduct } from '../../model/Product'

interface Props {
    data?: Iproduct[]
}

const Product = ({ data }: Props) => {
    return (
        <>
            <Sidebar />
            <MainContent>
                <div className="header px-5 shadow-lg w-full h-24 mb-3 flex justify-between items-center md:px-20">
                    <span></span>
                    <div className="user-profile flex space-x-3">
                        <div className="avatar w-8 h-8 ring ring-gray-300 rounded-lg cursor-pointer"></div>
                        <div className="name font-bold text-gray-400 mt-1">SPBU BAWAKARAENG</div>
                    </div>
                </div>
                <div className="flex justify-center px-24">
                    {/* @todo Table Must be Component class or function */}
                    <div className="bg-white shadow-lg rounded-lg p-2 w-full">
                        <table className="w-full">
                            <thead>
                                <tr className='bg-blue-500 text-white'>
                                    <th>Nama</th>
                                    <th>Harga 8KL</th>
                                    <th>Harga Beli</th>
                                    <th>Harga Jual</th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                {data?.map(item => (
                                    <tr key={item.id} className="border-b border-black">
                                        <td>{item.name}</td>
                                        <td className="text-center">{item.price_8kl}</td>
                                        <td className="text-center">{item.price_buy}</td>
                                        <td className="text-center">{item.price_sell}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainContent>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product`
    const response = await fetch(url)
    const { data } = await response.json()
    return {
        props: {
            data: data,
        },
        revalidate: 1
    }
}
export default withAuth(Product)
