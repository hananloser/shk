import React, { ReactNode } from 'react'

interface Props {
    children: JSX.IntrinsicAttributes | ReactNode
}

export const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col my-auto justify-center items-center  mx-auto bg-gray-20 h-screen">
            {children}
        </div>
    )
}


