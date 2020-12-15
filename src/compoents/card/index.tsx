import clsx from 'clsx'
import React from 'react'

export enum Color {
    primary = 'bg-primary',
    default = 'bg-white',
}

export enum Size {
    large = 'w-full lg:w-1/3',
}

type Props = {
    size: keyof typeof Size,
    color?: keyof typeof Color,
}

export const Card: React.FC<Props> = ({
    size = 'large',
    color = 'default',
    children,
    ...props
}) => {
    
    const className = clsx(
        'bg-primary shadow shadow-lg rounded-lg px-5 md:px-32',
        Size[size],
        Color[color]
    )

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

