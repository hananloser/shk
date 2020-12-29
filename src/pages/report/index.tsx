import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Table from '../../compoents/Table'
import { withAuth } from '../../hoc/withAuth'

const Report = () => {
    return (
        <div>
            <MainContent>
                <Header />
                <Table name="Laporan Penjualan"  />
                <Table name="Laporan Kas"  />
                <Table name="Laporan Pengeluaran"  />
            </MainContent>
        </div>
    )
}

export default withAuth(Report)
