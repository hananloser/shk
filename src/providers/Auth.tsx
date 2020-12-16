import React, { ReactNode, ReactElement } from 'react'


type AuthContext = {
    isAuthenticated: boolean,
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
}

const AuthContext = React.createContext<AuthContext>({
    isAuthenticated: false,
    setAuthenticated: () => { },
})

export const AuthProvider = ({ children, authenticated }: { children: ReactNode, authenticated: boolean }): ReactElement => {
    const [isAuthenticated, setAuthenticated] = React.useState<boolean>(authenticated)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(): AuthContext {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}


export function useIsAuthenticated(): boolean {
    const context = useAuth();
    return context.isAuthenticated;
}