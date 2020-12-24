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
                <div className="modal bg-gray-700 right-0 opacity-80 min-w-full h-screen fixed flex justify-center text-white items-center" onClick={() => setModal(!modal)}></div>
                <div className="bg-white rounded-md w-1/2 h-28 fixed flex justify-center top-56 right-96">
                    {children}
                </div>
            </>
        ) : (
                <>
                </>
            )
    )
}
export default Modal
