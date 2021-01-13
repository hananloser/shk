import { ErrorMessage, ProductActionTypes, ProductItem, Station } from "../../actions/products/ProductActionTypes";

interface InitialState {
    loading: boolean,
    products?: Station,
    productItem?: ProductItem,
    error?: ErrorMessage
}

const intialState: InitialState = {
    loading: false,
}

export const productReducer = (state: InitialState = intialState, action: ProductActionTypes): InitialState => {

    switch (action.type) {
        case 'PRODUCT_LOADING':
            return {
                loading: true
            }
        case 'PRODUCT_SUCCESS':
            return {
                loading: false,
                products: action.payload
            }

        case 'PRODUCT_FAIL':
            return {
                loading: false,
                error: action.message
            }

        case 'PRODUCT_DETAIL_LOADING':
            return {
                loading: true,
            }

        case 'PRODUCT_DETAIL_SUCCESS':
            return {
                loading: false,
                productItem: action.payload
            }
        case 'PRODUCT_DETAIL_FAIL':
            return {
                loading: false,
                error: action.message
            }

        case 'PRODUCT_DELETE_LOADING':
            return {
                loading: true,
            }
        case 'PRODUCT_DELETE_SUCCESS':
            return {
                loading: false,
            }

        case 'PRODUCT_DELETE_FAIL':
            return {
                loading: false,
                error: action.message
            }

        default:
            return state
    }
}