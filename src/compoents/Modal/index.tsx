import React, { ReactNode } from 'react'
import { useModal } from '../../providers/ModalProvider'

interface ModalProps {
    children: ReactNode,
}

const Modal = ({ children }: ModalProps) => {
    const { modal, setModal } = useModal()

    return (
        modal ? (
            <>
                <div className="bg-gray-700 right-0 opacity-80 min-w-full inset-0 h-screen fixed flex justify-center text-white items-center" onClick={() => setModal(!modal)}></div>
                <div className="bg-white right-0 w-full md:right-96 md:w-1/2 rounded-md h-auto mb-5 fixed flex justify-center top-56 z-50 ">
                    {children}
                </div>
            </>
        ) : (<></>)
    )
}
export default Modal
