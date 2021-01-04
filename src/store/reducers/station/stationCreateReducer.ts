import {
    StationCreate,
    StationActionDispatch,
    STATION_CREATE_LOADING,
    STATION_CREATE_SUCCESS,
    STATION_CREATE_FAIL
} from "../../actions/stations/CREATE/StationCreateActionTypes";

interface InitialState {
    loading: boolean,
    station?: StationCreate
    error?: StationCreate,
    code: string | number
}

const initialState: InitialState = {
    loading: false,
    code: ''
}
/**
 * Stattion Create Reducer
 * @param state 
 * @param action 
 */
export const stationCreateReducer = (state: InitialState = initialState, action: StationActionDispatch): InitialState => {
    switch (action.type) {
        case STATION_CREATE_LOADING:
            return {
                loading: true,
                code: '',

            }
        case STATION_CREATE_SUCCESS:
            return {
                loading: false,
                station: action.payload,
                error: undefined,
                code: action.code
            }
        case STATION_CREATE_FAIL:
            return {
                loading: true,
                error: action.message,
                code: action.code
            }
        default:
            return state
    }
}