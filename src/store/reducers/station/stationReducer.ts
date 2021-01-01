import { StationDispatchTypes, StationType, STATION_ERROR, STATION_LOADING, STATION_SUCCESS } from "../../actions/stations/GET/stationActionTypes"


interface InitialState {
    loading: boolean,
    stations?: StationType,
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
                stations: action.payload
            }
        case STATION_ERROR:
            return {
                loading : false
            }
        default:
            return state
    }
}