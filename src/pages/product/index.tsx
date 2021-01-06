import React, { useEffect } from 'react'
import MemoDexlite from '../../assets/icons/Dexlite'
import MemoEdit from '../../assets/icons/Edit'
import MemoPertamax from '../../assets/icons/Pertamax'
import MemoPremium from '../../assets/icons/Premium'
import MemoSolar from '../../assets/icons/Solar'
import MemoTrash from '../../assets/icons/Trash'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'
import { GetProducts } from '../../store/actions/products/ProductAction'
import { RootStore } from '../../store/store'


const ProductPage = ({ auth }) => {
    const user: AuthToken = auth
    const router = useRouter()

    const dispatch = useDispatch()

    const { products } = useSelector((state: RootStore) => state.product)

    useEffect(() => {
        dispatch(GetProducts('7daebbda-59cf-45c8-94de-84229bc9b250'))
    }, [])

    return (
        <>
            <div>
                <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
                <Sidebar active={router.pathname === '/product' ? 'active' : 'deactive'} />
                <MainContent>
                    <div className="flex justify-center">
                        <h1 className="font-bold text-3xl">PRODUCT {user.decodeToken.station.name_station.toUpperCase()}  </h1>
                    </div>
                    <div className="flex bg-gray-200 rounded-lg p-3 shadow-xl mx-12 mt-5">
                        <div className="w-full">
                            <div className="shadow  overflow-auto overflow-x-scroll  rounded border-b border-gray-200" >
                                <table className="min-w-full bg-white mb-3">
                                    <thead className="">
                                        <tr>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nama Produk</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga Beli/8KL</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">PPH</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Margin Pokok</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Margin PPH</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga Beli/L</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga Jual/L</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {products?.map(item => (
                                            <tr key={item.id} className="hover:bg-gray-400 cursor-pointer">
                                                <td className="text-left px-4">
                                                    <ProductIcon name={item.name} />
                                                </td>
                                                <td className="text-left px-4">{item.formatted_price_8kl}</td>
                                                <td className="text-left px-4">{item.formatted_pph}</td>
                                                <td className="text-left px-4">{item.formatted_margin_pokok}</td>
                                                <td className="text-left px-4">{item.formatted_margin_pph}</td>
                                                <td className="text-left px-4">{item.formated_price_buy}</td>
                                                <td className="text-left px-4">{item.formatted_price_sell}</td>
                                                <td className="text-left px-4">{item.total}</td>
                                                <td className="px-4 mb-3 mt-10 space-x-2 inline-flex justify-center">
                                                    <MemoEdit />
                                                    <MemoTrash />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </MainContent>
            </div>
        </>
    )
}

export default withAuth(ProductPage)


export const ProductIcon = ({ name }) => {
    switch (name) {
        case 'Solar':
            return <MemoSolar />

        case 'Premium':
            return <MemoPremium />

        case 'Dexlite':
            return <MemoDexlite />

        case 'Pertamax':
            return <MemoPertamax />

        default:
            return <></>
    }
}