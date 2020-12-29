import React, { ReactNode } from 'react'
import Sidebar from '../Sidebar'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col md:ml-80 z-20">
                {children}
            </div>
        </>
    )
}

export default MainContent