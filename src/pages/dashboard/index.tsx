import React from 'react'
import MemoTrendingDown from '../../assets/icons/TrendingDown'
import MemoTrendingUp from '../../assets/icons/TrendingUp'
import MemoWallet from '../../assets/icons/Wallet'
import { Card } from '../../compoents/card'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="flex flex-col md:ml-80">

            </div>
        </div>
    )
}

export default withAuth(Dashboard)
