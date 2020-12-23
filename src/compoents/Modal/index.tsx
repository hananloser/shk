import React, { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
    return (
        <>
            {/* Create OverLay */}
            <div className="modal bg-gray-700 right-0 opacity-80 min-w-full h-screen fixed flex justify-center text-white items-center"></div>
            {/* Create Box */}
            <div className="bg-white rounded-md w-1/2 h-28 fixed flex justify-center top-56 right-96">
                test
            </div>
            {children}
        </>
    )
}

export default Modal
