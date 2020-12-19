import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <div className="flex flex-col md:ml-80">
            {children}
        </div>
    )
}

export default MainContent
