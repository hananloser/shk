import { Dispatch } from "react"
import { Cookies } from 'react-cookie'
import { API } from "../../../services/api"
import { ProductActionTypes } from "./ProductActionTypes"

const cookies = new Cookies()

export const GetProducts = (stationId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({ type: 'PRODUCT_LOADING' })
        const res = await API.get(`api/v1/${stationId}/product`, { headers: { Authorization: 'Bearer ' + cookies.get('SHK') } });
        dispatch({ type: 'PRODUCT_SUCCESS', payload: res.data.data[0]?.products })
    } catch (error) {
        dispatch({ type: 'PRODUCT_FAIL', message: error.response })
    }
}