import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'


const Product = ({ auth }) => {

    const user: AuthToken = auth
    const router = useRouter()
    return (
        <>
            <div>
                <Header variant='manager' variantUser='manager' variantTitle="manager" username={user.decodeToken.name} />
                <Sidebar active={router.pathname === '/product' ? 'active' : 'deactive'} />
            </div>
        </>
    )
}

export default withAuth(Product)
