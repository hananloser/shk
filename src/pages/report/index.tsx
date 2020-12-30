import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Table from '../../compoents/Table'
import { withAuth } from '../../hoc/withAuth'

const Report = () => {
    return (
        <div>
            <MainContent>
                <Table name="Laporan Penjualan"  />
                <Table name="Laporan Kas"  />
                <Table name="Laporan Pengeluaran"  />
            </MainContent>
        </div>
    )
}

export default withAuth(Report)
