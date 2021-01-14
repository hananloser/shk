import React from 'react'
import MainContent from "../../compoents/container/MainContent";
import Header from "../../compoents/Header/Index";
import Sidebar from "../../compoents/Sidebar";
import {AuthToken} from "../../services/auth_token";
import {withAuth} from "../../hoc/withAuth";
import {useRouter} from "next/router";

const Bank = ({auth}) => {
    const user : AuthToken = auth
    const router = useRouter()

    return (
        <>
            <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
            <Sidebar active={router.pathname === '/bank' ? 'active' : 'deactive'} />
            <MainContent>
                <div className="flex justify-center">
                    <h2 className='font-semibold text-2xl mt-3'>BUKU BANK {user.decodeToken.station.name_station.toUpperCase()}</h2>
                </div>
                <div className="bg-alt mx-12 rounded-3xl p-3 m-2 ">
                    <div className="flex flex-col md:flex-row justify-between space-x-1">
                        <div className="bg-primary w-full p-3 rounded-2xl text-white font-semibold mt-2">
                            <span>No. Rekening : 0050-01-089865-50-9</span>
                        </div>
                        <div className="bg-primary w-full p-3 rounded-2xl text-white font-semibold mt-2">
                            <span>Pemilik Rekening : Ir. H. Sukardi. HS</span>
                        </div>
                    </div>
                    <div className="flex  overflow-x-scroll w-full">
                        <table className="min-w-full bg-white mb-3 mt-3 shadow-2xl">
                            <thead>
                            <tr>
                                <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm text-center">Tanggal</th>
                                <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm text-center">Uraian</th>
                                <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm text-center">Debit</th>
                                <th className="border-b-2 border-r-2 text-left py-3 px-4 uppercase font-semibold text-sm text-center">Kredit</th>
                                <th className="border-b-2 border-r-2 text-center py-3 px-4 uppercase font-semibold text-sm text-center">Saldo</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-700 border-b-2 border-l-2 border-r-2">
                                <tr className="hover:bg-gray-400 cursor-pointer text-sm">
                                    <td className="border-b-2 border-r-2 text-left px-4">1/11/20</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">Saldo dari bulan lalu (Oktober 2020)</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">-</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">-</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">Rp 60.003.927,00</td>
                                </tr>
                                <tr className="hover:bg-gray-400 cursor-pointer text-sm">
                                    <td className="border-b-2 border-r-2 text-left px-4">1/11/20</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">Saldo dari bulan lalu (Oktober 2020)</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">-</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">-</td>
                                    <td className="border-b-2 border-r-2 text-left px-4">Rp 60.003.927,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainContent>
        </>
    )
}

export  default  withAuth(Bank)