import jwt from 'jsonwebtoken'

export const verify = (token : string , key : jwt.Secret | Buffer) => {
    try {
        jwt.verify(token , key)
    } catch (error) {
        console.log(error);
    }
} 