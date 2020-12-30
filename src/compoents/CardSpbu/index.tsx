import React, { useState } from 'react'
import MemoDots from '../../assets/icons/Dots'
import { useModal } from '../../providers/ModalProvider'
import router from 'next/router'
interface Props {
    name?: string,
    image?: string,
}

const CardSpbu = ({ name, image }: Props) => {
    const [popUp, setPopUp] = useState<boolean | undefined>(false)
    const { modal, setModal } = useModal()
    return (
        <div className="ml-2 w-80 bg-gray-200 h-60 rounded-lg relative transform hover:scale-105 duration-200 ease-out">
            <img
                src={image} alt="images"
                width="240"
                height="128"
                className="w-80 h-60 bg-cover rounded-lg"
            />
            <div className="flex w-full bg-primary rounded-bl-lg rounded-br-lg absolute bottom-0 p-3 font-bold text-alt">
                {name}
            </div>
            <MemoDots className="text-2xl absolute top-0 right-0 mt-2 cursor-pointer" onClick={() => setPopUp(!popUp)} />
            {popUp &&
                <div className="w-32 h-24 text-right bg-alt absolute top-7 right-5 rounded-lg px-3 py-3">
                    <div className="flex justify-end">
                        <ul className="font-bold font-sm">
                            <li className="cursor-pointer" onClick={() => router.push('/admin/edit/1')}>Ubah Nama </li>
                            <li className="cursor-pointer" onClick={() => setModal(!modal)}>Hapus</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default CardSpbu
