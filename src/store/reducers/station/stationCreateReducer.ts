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
    error?: string | Object | undefined
}

const initialState: InitialState = {
    loading: false,
}
/**
 * Stattion Create Reducer
 * @param state 
 * @param action 
 */
export const stationReducer = (state: InitialState = initialState, action: StationActionDispatch): InitialState => {
    switch (action.type) {
        case STATION_CREATE_LOADING:
            return {
                loading: true
            }
        case STATION_CREATE_SUCCESS:
            return {
                loading: false,
                station: action.payload
            }
        case STATION_CREATE_FAIL:
            return {
                loading: false,
                error: action.message
            }
        default:
            return state
    }
}