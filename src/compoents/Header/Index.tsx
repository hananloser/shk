import clsx from 'clsx'
import React from 'react'
import MemoAvatar from '../../assets/icons/Avatar'
import MemoShk from '../../assets/icons/Shk'

export enum Variant {
    manager = 'bg-alt',
    admin = 'bg-secondry'
}

export enum VariantUser {
    manager = 'text-secondry',
    admin = 'text-white'
}

export enum VariantTitle {
    manager = 'text-secondry',
    admin = 'text-white'
}

type Props = {
    variant: keyof typeof Variant,
    variantUser : keyof typeof VariantUser,
    variantTitle : keyof typeof VariantUser,
    title?: string,
}

const Header = ({ variant = 'manager', title , variantUser , variantTitle }: Props) => {
    const classHeader = clsx('header px-5 shadow w-full h-24 flex justify-between items-center md:px-16 fixed', Variant[variant])
    const classUsername = clsx('font-bold  mt-1', VariantUser[variantUser])
    const classTitle = clsx('text-3xl font-bold font-roboto' , VariantTitle[variantTitle])
    
    return (
        <div className={classHeader}>
            <div className="flex items-center space-x-2">
                <MemoShk className="text-8xl" />
                <span className={classTitle}>{title}</span>
            </div>
            <div className="user-profile flex space-x-3 items-center">
                <div className="logo-section">
                </div>
                <div className={classUsername}>Hanan Asyrawi</div>
                <MemoAvatar className="text-5xl ml-3" />
            </div>
        </div>
    )
}

export default Header