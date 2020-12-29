import React, { ReactElement, ReactNode } from 'react'

/**
 * type For Modal Context
 */
type ModalContext = {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
}

/**
 * Creating Context For Modal
 */
const ModalContext = React.createContext<ModalContext>({
    modal: false,
    setModal: () => { }
})

/**
 * 
 * @param param children 
 * @param param show | bool
 */
export const ModalProvider = ({ children, show }: { children: ReactNode, show: boolean }): ReactElement => {
    const [modal, setModal] = React.useState<boolean>(show)
    return (
        <ModalContext.Provider value={{ modal, setModal }}  >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal(): ModalContext {
    const context = React.useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal  must be used within an AuthProvider');
    }
    return context;
}



