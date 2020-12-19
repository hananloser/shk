import { withRouter } from 'next/router'
import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Sidebar from '../../compoents/Sidebar'

const Product = () => {
    return (
        <>
            <Sidebar />
            <MainContent>
                <span>Halaman Products</span>
            </MainContent>
        </>
    )
}
export default withRouter(Product)
