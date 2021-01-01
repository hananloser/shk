import { StationByIdDispatchTypes, StationGetByIdType, STATION_BY_ID_ERROR, STATION_BY_ID_LOADING, STATION_BY_ID_SUCCESS } from "../../actions/stations/GET_BY_ID/stationGetByIdTypes"


interface InitialState {
    loading: boolean,
    station?: StationGetByIdType,
}

const initialState: InitialState = {
    loading: false,
}

export const stationByIdReducer = (state: InitialState = initialState, action: StationByIdDispatchTypes): InitialState => {
    switch (action.type) {
        case STATION_BY_ID_LOADING:
            return {
                loading: true
            }
        case STATION_BY_ID_SUCCESS:
            return {
                loading: false,
                station: action.payload
            }
        case STATION_BY_ID_ERROR:
            return {
                loading : false
            }
        default:
            return state
    }
}