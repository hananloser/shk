import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Arrow, useLayer } from 'react-laag'
import MemoAvatar from '../../assets/icons/Avatar'
import MemoShk from '../../assets/icons/Shk'
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
    const [isOpen, setOpen] = useState(false)
    const classHeader = clsx('header px-5 shadow w-full h-24 flex justify-between items-center md:px-16 fixed z-50', Variant[variant])
    const classUsername = clsx('font-bold  mt-1', VariantUser[variantUser])
    const classTitle = clsx('text-3xl font-bold font-roboto', VariantTitle[variantTitle])


    const close = () => {
        setOpen(false)
    }

    const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
        isOpen: isOpen,
        onOutsideClick: close, // close the menu when the user clicks outside
        onDisappear: close, // close the menu when the menu gets scrolled out of sight
        overflowContainer: false, // keep the menu positioned inside the container
        auto: true, // automatically find the best placement
        placement: "bottom-end", // we prefer to place the menu "top-end"
        triggerOffset: 12, // keep some distance to the trigger
        containerOffset: 16, // give the menu some room to breath relative to the container
        arrowOffset: 16 // let the arrow have some room to breath also
    });



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
                <button  {...triggerProps}>
                    <MemoAvatar className="text-5xl ml-3 cursor-pointer" onClick={() => setOpen(!isOpen)} />
                </button>
                {
                    renderLayer(
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.1 }}
                                    {...layerProps}>
                                    <div className="bg-alt z-50 absolute top-0 right-7 w-36 h-24 text-right p-4 shadow-lg rounded-md">
                                        <span className="mb-2 font-semibold cursor-pointer">Lihat Profil</span>
                                        <br />
                                        <span className="mb-2 font-semibold cursor-pointer" onClick={() => AuthToken.logout()}  >Keluar</span>
                                    </div>
                                    <Arrow {...arrowProps} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )
                }
            </div>
        </div>
    )
}

export default Header