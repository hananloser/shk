import { useRouter } from 'next/router'
import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'

const Stock = ({ auth }) => {

    const router = useRouter()
    const user: AuthToken = auth

    return (
        <div>
            <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
            <Sidebar active={router.pathname === '/stock' ? 'active' : 'deactive'} />
            <MainContent>
                ini halaman stock
            </MainContent>
        </div>
    )
}

export default withAuth(Stock)
