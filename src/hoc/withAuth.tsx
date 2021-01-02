import React, { Component } from 'react'
import { NextPageContext } from 'next';
import { AuthToken } from '../services/auth_token';
import ServerCookies from 'next-cookies'

export type AuthProps = {
    auth: AuthToken
}

export const withAuth = (WrappedComponent: any) => {
    return class extends Component<AuthProps> {
        static async getInitialProps(ctx: NextPageContext) {
            const token = ServerCookies(ctx)['SHK']
            const auth = new AuthToken(token)
            const initialProps = { auth }

            if (auth.isExpired || token === undefined || !auth.isValid || auth.decodeToken.roles === "manager") {
                ctx.res?.writeHead(302, {
                    Location: '/'
                })
                ctx.res?.end()
            }

            if (WrappedComponent.getInitialProps) {
                return WrappedComponent.getInitialProps(initialProps);
            }

            return initialProps
        }

        get auth() {
            // the server pass to the client serializes the token
            // so we have to reinitialize the authToken class
            //
            // @see https://github.com/zeit/next.js/issues/3536
            return new AuthToken(this.props.auth.token);
        }
        render() {
            return <WrappedComponent  {...this.props} auth={this.auth} />
        }
    }
}
