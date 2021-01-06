import clsx from 'clsx'
import React from 'react'
import MemoAvatar from '../../assets/icons/Avatar'
import MemoShk from '../../assets/icons/Shk'
import { usePopup } from '../../providers/PopupProvider'
import { AuthToken } from '../../services/auth_token'

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
    variantUser: keyof typeof VariantUser,
    variantTitle: keyof typeof VariantUser,
    title?: string,
    username?: string
}

const Header = ({ variant = 'manager', title, variantUser, variantTitle, username = '' }: Props) => {
    const { Popup, setPopup } = usePopup()
    const classHeader = clsx('header px-5 shadow w-full h-24 flex justify-between items-center md:px-16 fixed z-50', Variant[variant])
    const classUsername = clsx('font-bold  mt-1', VariantUser[variantUser])
    const classTitle = clsx('text-3xl font-bold font-roboto', VariantTitle[variantTitle])

    return (
        <div className={classHeader}>
            <div className="flex items-center space-x-2">
                <MemoShk className="text-8xl" />
                <span className={classTitle}>{title}</span>
            </div>
            <div className="user-profile flex space-x-3 items-center relative">
                <div className="logo-section">
                </div>
                <div className={classUsername}> {username.toUpperCase()} </div>
                <MemoAvatar className="text-5xl ml-3 cursor-pointer" onClick={() => setPopup(!Popup)} />
                {Popup && (
                    <div className="bg-alt absolute top-12 right-12 w-36 h-24 text-right p-4 shadow-lg">
                        <span className="mb-2 font-semibold cursor-pointer">Lihat Profil</span>
                        <br />
                        <span className="mb-2 font-semibold cursor-pointer" onClick={() => AuthToken.logout()}  >Keluar</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header