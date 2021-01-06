import { Cookies } from "react-cookie"
import { AuthToken } from "../services/auth_token";

const cookies = new Cookies();
const token = new AuthToken(cookies.get('SHK'))

export const useUser = () => {
    return {
        name: token.decodeToken.name,
        roles: token.decodeToken.roles
    }
}