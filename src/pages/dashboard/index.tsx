import React from 'react'
import MemoCash from '../../assets/icons/Cash'
import { Button } from '../../compoents/button'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'

const Dashboard = () => {
    return (
        <div>
            <Header variant='manager' variantUser='manager' variantTitle="manager" />
            <Sidebar active="active" />
            <div className="flex flex-col md:ml-80">
                <div className="flex flex-col">
                    <div className="mt-32 flex justify-center font-roboto font-bold uppercase text-3xl">
                        <h1>selamat datang hanan</h1>
                    </div>
                    <div className="profile_card flex flex-col p-24">
                        <div className="card bg-gray-400 w-full rounded-lg h-64">
                        </div>
                        <div className="card bg-gray-300 w-full rounded-lg h-36 mt-5 flex justify-between">
                            <div className="flex flex-col p-12 text-2xl">
                                <span>Nomor SPBU : 98729BAG87T</span>
                                <span>Lokasi SPBU : Jakarta, Indonesia</span>
                            </div>
                            <div className="flex flex-col p-12 text-2xl">
                                <span>No. Telpon: (021) 8662012896</span>
                                <Button href="/" size="small">
                                    Lihat Lokasi via Google Map
                                </Button>
                            </div>
                        </div>
                        <div className="card w-full flex space-x-2 mt-2">
                            <div className="bg-gray-300 w-1/3 h-40 rounded-lg items-center justify-center p-6">
                                <div className="flex">
                                    <MemoCash className="text-8xl" />
                                    <div className="flex flex-col justify-center p-6">
                                        <span className="font-bold text-2xl">Pendapatan Bulan Ini</span>
                                        <span className="font-bold text-2xl">Rp 300.000.000,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-300 w-1/3 h-40 rounded-lg items-center justify-center p-6">
                                <div className="flex">
                                    <MemoCash className="text-8xl" />
                                    <div className="flex flex-col justify-center p-6">
                                        <span className="font-bold text-2xl">Pengeluaran Bulan Ini</span>
                                        <span className="font-bold text-2xl">Rp 300.000.000,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-300 w-1/3 h-40 rounded-lg items-center justify-center p-6">
                                <div className="flex">
                                    <MemoCash className="text-8xl" />
                                    <div className="flex flex-col justify-center p-6">
                                        <span className="font-bold text-2xl">Saldo Sekarang</span>
                                        <span className="font-bold text-2xl">Rp 300.000.000,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Dashboard)
