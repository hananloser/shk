import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import Table from '../../compoents/Table'
import { withAuth } from '../../hoc/withAuth'

const Product = () => {
    return (
        <>
            <Sidebar />
            <MainContent>
                <Header />
                <Table name="Produk" />
            </MainContent>
        </>
    )
}

export default withAuth(Product)
