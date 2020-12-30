import React, { ReactElement, ReactNode } from 'react'

/**
 * type For Popup Context
 */
type PopupContext = {
    Popup: boolean,
    setPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

/**
 * Creating Context For Popup
 */
const PopupContext = React.createContext<PopupContext>({
    Popup: false,
    setPopup: () => { }
})

/**
 * 
 * @param param children 
 * @param param show | bool
 */
export const PopupProvider = ({ children, show }: { children: ReactNode, show: boolean }): ReactElement => {
    const [Popup, setPopup] = React.useState<boolean>(show)
    return (
        <PopupContext.Provider value={{ Popup, setPopup }}  >
            {children}
        </PopupContext.Provider>
    );
}

export function usePopup(): PopupContext {
    const context = React.useContext(PopupContext);
    if (context === undefined) {
        throw new Error('usePopup  must be used within an AuthProvider');
    }
    return context;
}



