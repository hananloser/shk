import { ErrorMessage, Product, ProductActionTypes } from "../../actions/products/ProductActionTypes";

interface InitialState {
    loading: boolean,
    product?: Product | Product[],
    error?: ErrorMessage
}

const intialState: InitialState = {
    loading: false,
}

export const productReducer = (state: InitialState = intialState, action: ProductActionTypes): InitialState => {
    
    switch (action.type) {
        case 'PRODUCT_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload
            }

        case 'PRODUCT_FAIL':
            return {
                ...state,
                loading: false,
                error : action.message
            }

        default:
            return state
    }
}