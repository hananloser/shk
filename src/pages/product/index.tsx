import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'
import { GetProducts } from '../../store/actions/products/ProductAction'


const Product = ({ auth }) => {
    const user: AuthToken = auth
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProducts('7daebbda-59cf-45c8-94de-84229bc9b250'))
    })

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
