import { useRouter } from 'next/router'
import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import Table from '../../compoents/Table'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'

const Report = ({ auth }) => {

    const router = useRouter()
    const user: AuthToken = auth

    return (
        <div>
            <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
            <Sidebar active={router.pathname === '/report' ? 'active' : 'deactive'} />
            <MainContent>
                <Table name="Laporan Penjualan" />
                <Table name="Laporan Kas" />
                <Table name="Laporan Pengeluaran" />
            </MainContent>
        </div>
    )
}

export default withAuth(Report)
