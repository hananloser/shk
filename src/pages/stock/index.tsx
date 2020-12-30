import React from 'react'
import MainContent from '../../compoents/container/MainContent'
import { withAuth } from '../../hoc/withAuth'

const Stock = () => {
    return (
        <div>
            <MainContent>
                ini halaman stock
            </MainContent>
        </div>
    )
}

export default withAuth(Stock)
