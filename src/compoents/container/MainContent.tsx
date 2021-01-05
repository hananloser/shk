import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <>
            <div className="flex flex-col md:ml-80 z-20">
                <div className="main-content mt-28">
                    {children}
                </div>
            </div>
        </>
    )
}

export default MainContent
