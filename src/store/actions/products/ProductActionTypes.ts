
/**
 * State Get Products
 */
export const PRODUCT_LOADING = 'PRODUCT_LOADING'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAIL = 'PRODUCT_FAIL'

/**
 * State Store the Products
 * 
 */
export const PRODUCT_STORE_LOADING = 'PRODUCT_STORE_LOADING'
export const PRODUCT_STORE_SUCCESS = 'PRODUCT_STORE_SUCCESS'
export const PRODUCT_STORE_FAIL = 'PRODUCT_STORE_FAIL'

/**
 * State Update Products
 * 
 */
export const PRODUCT_UPDATE_LOADING = 'PRODUCT_UPDATE_LOADING'
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_LOADING'
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_LOADING'

/**
 * State DELETE Products 
 * 
 */
export const PRODUCT_DELETE_LOADING = 'PRODUCT_DELETE_LOADING'
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS'
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL'

/**
 * State detail Products 
 * 
 */
export const PRODUCT_DETAIL_LOADING = 'PRODUCT_DETAIL_LOADING'
export const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS'
export const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL'


export interface ErrorMessage {
    error: string,
    message: string | Object
}


export interface Product {
    id: string;
    name: string;
    price_buy: number;
    price_sell: number;
    price_8kl: number;
    pph: number,
    margin_pokok: number,
    margin_pph: number,
    formated_price_buy?: string;
    formatted_price_sell?: string;
    formatted_price_8kl?: string;
    formatted_pph?: string;
    formatted_margin_pokok?: string;
    formatted_margin_pph?: string;
    total: string
}

export interface Station {
    name_station: string,
    products: Product[]
}

/**
 * Action Types For GET PRODUCTS
 */
export interface ProductLoading {
    type: typeof PRODUCT_LOADING
}

export interface ProductSuccess {
    type: typeof PRODUCT_SUCCESS,
    payload: Station
}

export interface ProductFail {
    type: typeof PRODUCT_FAIL,
    message?: ErrorMessage
}

/**
 * Action Type Store Products
 */
export interface ProductStoreLoading {
    type: typeof PRODUCT_STORE_LOADING,
}

export interface ProductStoreSuccess {
    type: typeof PRODUCT_STORE_SUCCESS,
    payload: any
}

export interface ProductStoreFail {
    type: typeof PRODUCT_STORE_FAIL,
    message: ErrorMessage
}

/**
 * Action Type Update
 */
export interface ProductUpdateLoading {
    type: typeof PRODUCT_UPDATE_LOADING,
}

export interface ProductUpdateSuccess {
    type: typeof PRODUCT_UPDATE_SUCCESS,
    message: string
}

export interface ProductUpdateFail {
    type: typeof PRODUCT_UPDATE_FAIL,
    message: ErrorMessage
}

/**
 * Action Type for Deletes
 */
export interface ProductDeleteoading {
    type: typeof PRODUCT_DELETE_LOADING,
}

export interface ProductDeleteSuccess {
    type: typeof PRODUCT_DELETE_SUCCESS,
    message: string
}

export interface ProductDeleteFail {
    type: typeof PRODUCT_DELETE_FAIL,
    message: ErrorMessage
}

/**
 * State Detail Products
 */
export interface ProductDetailLoading {
    type: typeof PRODUCT_DETAIL_LOADING,
}

export interface ProductDetailSuccess {
    type: typeof PRODUCT_DETAIL_SUCCESS,
    payload: Product
}

export interface ProductDetailFail {
    type: typeof PRODUCT_DETAIL_FAIL,
    message: ErrorMessage
}


export type ProductActionTypes =
    | ProductLoading
    | ProductSuccess
    | ProductFail
    | ProductStoreLoading
    | ProductStoreSuccess
    | ProductStoreFail
    | ProductUpdateLoading
    | ProductUpdateSuccess
    | ProductUpdateFail
    | ProductDetailLoading
    | ProductDetailSuccess
    | ProductDetailFail