import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'

const Report = () => {
    return (
        <div>
            <Sidebar />
            <MainContent>
                <Header />
                <span>Halaman Report</span>
            </MainContent>
        </div>
    )
}

export default Report
