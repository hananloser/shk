import React from 'react'

interface TheadWrapperProps {
    children: React.ReactNode
}

interface TheadProps {
    name: string,
}

export const TheadWrapper = ({ children }: TheadWrapperProps) => {
    return (
        <tr className="flex border-b-2 text-center bg-secondry rounded-tl-lg rounded-tr-lg items-center justify-around text-white font-semibold">
            {children}
        </tr>
    )
}

export const Thead = ({ name }: TheadProps) => {
    return (
        <th className="text-left p-3 px-5">{name}</th>
    )
}

