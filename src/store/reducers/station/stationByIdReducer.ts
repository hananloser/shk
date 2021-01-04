import { StationByIdDispatchTypes, StationGetByIdType, STATION_BY_ID_DELETED, STATION_BY_ID_DELETED_FAIL, STATION_BY_ID_DELETED_LOADING, STATION_BY_ID_ERROR, STATION_BY_ID_LOADING, STATION_BY_ID_SUCCESS } from "../../actions/stations/GET_BY_ID/stationGetByIdTypes"


interface InitialState {
    loading: boolean,
    deleted?: boolean
    station?: StationGetByIdType,
    error?: string | Object
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
                loading: false
            }

        case STATION_BY_ID_DELETED_LOADING:
            return {
                loading: true,
            }

        case STATION_BY_ID_DELETED:
            return {
                deleted: true,
                loading: false,
            }

        case STATION_BY_ID_DELETED_FAIL:
            return {
                loading: false,
                deleted: false,
                error: action.message
            }

        default:
            return state
    }
}