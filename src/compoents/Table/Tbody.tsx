import React from 'react'

interface TbodyWrapperProps {
    children: React.ReactNode
}

interface Tbody {
    value: string | number | null
}

export const TbodyContentWrapper = ({ children }: TbodyWrapperProps) => {
    return (
        <tr className="flex border-b-2 text-center">
            {children}
        </tr>
    )
}


export const Tbody = ({ value }: Tbody) => {
    return (
        <td className="p-3 px-5 border w-full">
            {value}
        </td>
    )
}

