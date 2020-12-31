import {
    STATION_SUCCESS,
    STATION_ERROR,
    STATION_LOADING,
    StationDispatchTypes,
    StationType
} from '../../actions/stations/stationActionTypes'

interface InitialState {
    loading: boolean,
    station?: StationType,
}

const initialState: InitialState = {
    loading: false,
}

export const stationReducer = (state: InitialState = initialState, action: StationDispatchTypes): InitialState => {
    switch (action.type) {
        case STATION_LOADING:
            return {
                loading: true
            }
        case STATION_SUCCESS:
            return {
                loading: false,
                station: action.payload
            }
        case STATION_ERROR:
            return {
                loading : false
            }
        default:
            return state
    }
}