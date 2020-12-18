import clsx from 'clsx'
import React from 'react'

export enum Color {
    primary = 'bg-primary',
    default = 'bg-white',
}

export enum Size {
    large = 'w-full lg:w-1/3',
    profile = 'w-full h-72',
    small = 'w-full lg:w-1/4'
}


type Props = {
    size: keyof typeof Size,
    color?: keyof typeof Color,
    customClass?: string
}

export const Card: React.FC<Props> = ({
    size = 'large',
    color = 'default',
    customClass,
    children,
    ...props
}) => {

    const className = clsx(
        'bg-primary shadow shadow-lg rounded-lg ' + customClass ?? '',
        Size[size],
        Color[color]
    )

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

