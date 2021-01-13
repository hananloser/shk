import { Dispatch } from "react"
import { Cookies } from 'react-cookie'
import { API } from "../../../services/api"
import { Product, ProductActionTypes } from "./ProductActionTypes"

const cookies = new Cookies()

/**
 * Get All Products
 * @param stationId 
 */
export const GetProducts = (stationId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({ type: 'PRODUCT_LOADING' })
        const res = await API.get(`api/v1/${stationId}/product`, { headers: { Authorization: 'Bearer ' + cookies.get('SHK') } });
        dispatch({ type: 'PRODUCT_SUCCESS', payload: res.data.data[0] })
    } catch (error) {
        dispatch({ type: 'PRODUCT_FAIL', message: error.response })
    }
}
/**
 * 
 * Get Product By ID
 * 
 * @param stationId 
 * @param productId 
 */
export const GetproductsById = (stationId: string, productId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_LOADING' });
        const res = await API.get(`api/v1/${stationId}/product/${productId}`, { headers: { Authorization: 'Bearer ' + cookies.get('SHK') } });
        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: res.data[0].products });
    } catch (error) {
        dispatch({ type: 'PRODUCT_DETAIL_FAIL', message: error.response });
    }
}
/**
 * Store The Products
 * @param stationId 
 * @param product 
 */
export const StoreProducts = (stationId: string, product: Product) => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({ type: 'PRODUCT_STORE_LOADING' });
        const res = await API.post(`api/v1/${stationId}/product/`, product, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })
        dispatch({ type: 'PRODUCT_STORE_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_STORE_FAIL', message: error.response })
    }
}
/**
 * Delete The Products
 * @param stationId 
 * @param product 
 */
export const DeleteProduct = (stationId: string, productId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({ type: 'PRODUCT_DELETE_LOADING' })
        const res = await API.delete(`api/v1/${stationId}/product/${productId}`, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })
        dispatch({ type: 'PRODUCT_DELETE_SUCCESS', message: 'product has deleted' + res.data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_DELETE_FAIL', message: error.response })
    }
}