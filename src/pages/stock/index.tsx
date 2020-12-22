import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'

const Stock = () => {
    return (
        <div>
            <Sidebar />
            <MainContent>
                <Header />
                ini halaman stock
            </MainContent>
        </div>
    )
}

export default withAuth(Stock)
