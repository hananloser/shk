import React, { useState } from 'react'
import router from 'next/router'

import MemoDots from '../../assets/icons/Dots'
import { Station } from '../../store/actions/stations/GET/stationActionTypes'
import { useModal } from '../../providers/ModalProvider'
import { Arrow, useLayer } from 'react-laag'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
    name?: string,
    image?: string,
    station: Station,
    handleId: (stationId) => void
}

const CardSpbu = ({ name, image, station, handleId }: Props) => {

    const [isOpen, setOpen] = useState(false)
    const { modal, setModal } = useModal()

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


    const triggerModal = () => {
        handleId(station.id)
        setOpen(false)
        setModal(!modal)
    }

    return (
        <>
            <div className="ml-2 w-80 bg-gray-200 h-60 rounded-lg relative transform hover:scale-105 duration-200 ease-out" >
                <img
                    src={image} alt="images"
                    width="240"
                    height="128"
                    className="w-80 h-60 bg-cover rounded-lg"
                    onClick={() => router.push({ pathname: '/dashboard', query: { station: station.id } })}
                />
                <div className="flex w-full bg-primary rounded-bl-lg rounded-br-lg absolute bottom-0 p-3 font-bold text-alt">
                    {name}
                </div>
                <button className="text-2xl absolute top-0 right-0 mt-2 cursor-pointer focus:outline-none" {...triggerProps}>
                    <MemoDots onClick={() => setOpen(!isOpen)} />
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
                                    {...layerProps}
                                    className="w-32 h-24 text-right bg-alt absolute top-7 right-5 rounded-lg px-3 py-3" {...layerProps}>
                                    <div className="flex justify-end">
                                        <ul className="font-bold font-sm">
                                            <li className="cursor-pointer" onClick={() => router.push('/admin/edit/' + station.id)}>Ubah Nama </li>
                                            <li className="cursor-pointer" onClick={() => triggerModal()}>Hapus</li>
                                        </ul>
                                    </div>
                                    <Arrow {...arrowProps} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )
                }
            </div>
        </>
    )
}

export default CardSpbu
