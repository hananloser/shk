import { ThunkAction } from 'redux-thunk'
import { Stations } from '../reducers/StationReducer'
import { RootActions, RootState } from '../store'

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>

export enum StationActionsTypes {
    FETCH_STATIONS = 'FETCH_STATIONS',
    FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS',
    FETCH_STATIONS_FAIL = 'FETCH_STATIONS_FAIL',
    FETCH_STATION = 'FETCH_STATION',
    FETCH_STATION_SUCCESS = 'FETCH_STATION_SUCCESS',
    FETCH_STATION_FAIL = 'FETCH_STATION_FAIL',
    ADD_STATION = 'ADD_STATION',
    ADD_STATION_SUCCESS = 'ADD_STATION_SUCCESS',
    ADD_STATION_FAIL = 'ADD_STATION_FAIL',
    EDIT_STATION = 'EDIT_STATION',
    EDIT_STATION_SUCCESS = 'EDIT_STATION_SUCCESS',
    EDIT_STATION_FAIL = 'EDIT_STATION_FAIL',
    DELETE_STATION = 'DELETE_STATION',
    DELETE_STATION_SUCCESS = 'DELETE_STATION_SUCCESS',
    DELETE_STATION_FAIL = 'DELETE_STATION_FAIL'
}


interface FetchStation {
    type: StationActionsTypes.FETCH_STATION
}

interface FetchStationSuccess {
    type: StationActionsTypes.FETCH_STATION_SUCCESS,
    payload: Stations
}

interface FetchStationFail {
    type: StationActionsTypes.FETCH_STATION_FAIL;
}

export type StationAction =
    | FetchStation
    | FetchStationSuccess
    | FetchStationFail
