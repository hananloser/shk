import React, { Component } from 'react'
import { NextPageContext } from 'next';
import { AuthToken } from '../services/auth_token';
import ServerCookies from 'next-cookies'
import { Cookies } from 'react-cookie';

export type AuthProps = {
    auth?: AuthToken
}
const cookies = new Cookies()
export const withAuth = (WrappedComponent: any) => {
    return class extends Component<AuthProps> {
        static async getInitialProps(ctx: NextPageContext) {
            const token = ServerCookies(ctx)['SHK']
            const auth = new AuthToken(token)
            const initialProps = { auth }
            if (auth.isExpired || token === undefined || !auth.isValid) {
                ctx.res?.writeHead(302, {
                    Location: '/'
                })
                ctx.res?.end()
            }
            if (WrappedComponent.getInitialProps) {
                return WrappedComponent.getInitialProps(ctx, initialProps);
            }
            return initialProps
        }
        get auth() {
            // the server pass to the client serializes the token
            // so we have to reinitialize the authToken class
            //
            // @see https://github.com/zeit/next.js/issues/3536
            return new AuthToken(cookies.get('SHK') || this.props.auth?.token || null);
        }
        render() {
            return <WrappedComponent  {...this.props} auth={this.auth} />
        }
    }
}
