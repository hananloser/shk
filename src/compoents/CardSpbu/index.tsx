import React, { useState } from 'react'
import router from 'next/router'

import MemoDots from '../../assets/icons/Dots'
import { Station } from '../../store/actions/stations/GET/stationActionTypes'
import { useModal } from '../../providers/ModalProvider'
interface Props {
    name?: string,
    image?: string,
    station: Station,
    handleId: (stationId) => void
}

const CardSpbu = ({ name, image, station, handleId }: Props) => {

    const [popUp, setPopUp] = useState<boolean | undefined>(false)
    const { modal, setModal } = useModal()

    const triggerModal = () => {
        handleId(station.id)
        setModal(!modal)
    }

    return (
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
            <MemoDots className="text-2xl absolute top-0 right-0 mt-2 cursor-pointer" onClick={() => setPopUp(!popUp)} />
            {popUp &&
                <div className="w-32 h-24 text-right bg-alt absolute top-7 right-5 rounded-lg px-3 py-3">
                    <div className="flex justify-end">
                        <ul className="font-bold font-sm">
                            <li className="cursor-pointer" onClick={() => router.push('/admin/edit/' + station.id)}>Ubah Nama </li>
                            <li className="cursor-pointer" onClick={() => triggerModal()}>Hapus</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default CardSpbu
