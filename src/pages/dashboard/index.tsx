import React from 'react'
import MemoTrendingDown from '../../assets/icons/TrendingDown'
import MemoTrendingUp from '../../assets/icons/TrendingUp'
import MemoWallet from '../../assets/icons/Wallet'
import { Card } from '../../compoents/card'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="flex flex-col md:ml-80">
                <div className="header px-5 shadow-lg w-full h-24 mb-3 flex justify-between items-center md:px-20">
                    <span></span>
                    <div className="user-profile flex space-x-3">
                        <div className="avatar w-8 h-8 ring ring-gray-300 rounded-lg cursor-pointer"></div>
                        <div className="name font-bold text-gray-400 mt-1">SPBU BAWAKARAENG</div>
                    </div>
                </div>
                <div className="container mx-auto px-8">
                    <Card size='profile' customClass={'px-4 pt-4'}>
                        <div className="flex flex-col space-y-4">
                            <span className="text-4xl">NOMOR SPBU</span>
                            <span className="text-4xl">ALAMAT SPBU</span>
                        </div>
                    </Card>
                    <div className="flex flex-col md:flex-row justify-between  items-center text-center">
                        <Card size='small' customClass={'mt-2 flex flex-col item-center justify-center'}>
                            <div className="icon text-center flex justify-center mb-2">
                                <MemoTrendingUp className='text-9xl'/>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span>400</span>
                                <span>Pengeluaran</span>
                            </div>
                        </Card>
                        <Card size='small' customClass={'mt-2'}>
                            <div className="icon text-center flex justify-center mb-2">
                                <MemoTrendingDown className='text-9xl' />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span>400</span>
                                <span>Pengeluaran</span>
                            </div>
                        </Card>
                        <Card size='small' customClass={'mt-2 '}>
                            <div className="icon text-center flex justify-center mb-2">
                                <MemoWallet className={'text-9xl'} />
                            </div>
                            <div className="text-center flex flex-col">
                                <span>300</span>
                                <span>Saldo Sekarang</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Dashboard)
