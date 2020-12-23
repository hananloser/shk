import React, { ReactNode } from 'react'
import Modal from '../Modal'
import Sidebar from '../Sidebar'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <Modal>
            <Sidebar />
            <div className="flex flex-col md:ml-80 z-20">
                {children}
            </div>
        </Modal>
    )
}

export default MainContent
