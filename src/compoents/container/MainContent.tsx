import React, { ReactNode } from 'react'
import Header from '../Header/Index'
import Sidebar from '../Sidebar'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <>
            <Header variant='manager' variantUser='manager' variantTitle="manager" />
            <Sidebar  />
            <div className="flex flex-col md:ml-80 z-20">
                <div className="main-content mt-28">
                    {children}
                </div>
            </div>
        </>
    )
}

export default MainContent
