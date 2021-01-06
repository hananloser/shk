import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import MemoDexlite from '../../assets/icons/Dexlite'
import MemoEdit from '../../assets/icons/Edit'
import MemoPertamax from '../../assets/icons/Pertamax'
import MemoPremium from '../../assets/icons/Premium'
import MemoSolar from '../../assets/icons/Solar'
import MemoTrash from '../../assets/icons/Trash'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'
import { GetProducts } from '../../store/actions/products/ProductAction'
import { RootStore } from '../../store/store'


const ProductPage = ({ auth }) => {
    const user: AuthToken = auth
    const router = useRouter()
    const dispatch = useDispatch()
    const { products } = useSelector((state: RootStore) => state.product)

    const station_id = router.query.station as string;

    useEffect(() => {
        dispatch(GetProducts(station_id))
    }, [])

    return (
        <>
            <div>
                <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
                <Sidebar active={router.pathname === '/product' ? 'active' : 'deactive'} />
                <MainContent>
                    <div className="flex justify-center">
                        <h1 className="font-bold text-3xl">PRODUCT {products?.name_station.toUpperCase()}  </h1>
                    </div>
                    <div className="flex bg-gray-200 rounded-lg p-3 shadow-xl mx-12 mt-5">
                        <div className="w-full">
                            <div className="shadow  overflow-auto overflow-x-scroll  rounded border-b border-gray-100" >
                                <table className="min-w-full bg-alt mb-3">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Nama Produk</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Harga Beli/8KL</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">PPH</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Margin Pokok</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Margin PPH</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Harga Beli/L</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Harga Jual/L</th>
                                            <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm">Total</th>
                                            <th className="border-b-2 border-r-2 text-center py-3 px-4 uppercase font-semibold text-sm">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 border-b-2 border-l-2 border-r-2">
                                        {products?.products?.map(item => (
                                            <tr key={item.id} className="hover:bg-gray-400 cursor-pointer">
                                                <td className="text-left px-4 border-b-2 border-r-2 ">
                                                    <ProductIcon name={item.name} />
                                                </td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formatted_price_8kl}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formatted_pph}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formatted_margin_pokok}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formatted_margin_pph}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formated_price_buy}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.formatted_price_sell}</td>
                                                <td className="border-b-2 border-r-2 text-left px-4">{item.total}</td>
                                                <td className="border-b-2">
                                                    <div className="flex item-center justify-center space-x-2">
                                                        <MemoEdit />
                                                        <MemoTrash />
                                                    </div>
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
            return <MemoPertamax />
    }
}