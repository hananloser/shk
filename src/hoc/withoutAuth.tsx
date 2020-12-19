import React, { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import redirect from '../lib/redirect';


const cookie = new Cookies();

export const withoutAuth = <T extends object>(Component: React.FC<T>) => {
    const AuthComponent: React.FC<T> = (props) => {
        const me = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/me`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + cookie.get('token')
                }
            });
            if (response.status == 200 || cookie.get('token') !== undefined) {
                redirect('error', '/dashboard')
            }
        }
        useEffect(() => {
            me();
        }, [])

        return (
            <Component {...props} />
        )
    }
    return AuthComponent
}
