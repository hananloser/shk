import jwtDecode from 'jwt-decode'
import { Cookies } from 'react-cookie'
import router from 'next/router'
import { Station } from '../model/Station';

export type DecodedToken = {
    name: string
    readonly username: string;
    readonly exp: number;
    readonly roles: string
    readonly station: Station
}

const TOKEN_KEY = 'SHK';

export class AuthToken {
    readonly decodeToken: DecodedToken
    constructor(readonly token?: string) {
        this.decodeToken = { username: '', exp: 0, roles: '', name: '', station: { id: '', name_station: '' } }
        try {
            if (token) this.decodeToken = jwtDecode(token);
        } catch (e) {
            console.log(e);
        }
    }

    get authorizationString() {
        return `Bearer ${this.token}`;
    }

    get expiresAt(): Date {
        return new Date(this.decodeToken.exp * 1000);
    }

    get isExpired(): boolean {
        return new Date() > this.expiresAt;
    }

    get isValid(): boolean {
        return !this.isExpired;
    }

    static async storeToken(token: string) {
        const cookies = new Cookies()
        cookies.set(TOKEN_KEY, token);
    }

    static async logout() {
        const cookies = new Cookies()
        cookies.remove('SHK');
        await router.replace('/')
    }

    get name(): string {
        return this.decodeToken.name
    }

}