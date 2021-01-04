/**
 * STATE FOR CREATE STATION
 */
export const STATION_CREATE_LOADING = 'STATION_CREATE_LOADING'
export const STATION_CREATE_SUCCESS = 'STATION_CREATE_SUCCESS'
export const STATION_CREATE_FAIL = 'STATION_CREATE_FAIL'

/**
 * Model Interface
 * 
 */
export interface StationCreate {
    name_station: string,
    no_station: string,
    name: string,
    username: string,
    password: string,
    location: string,
    photo?: string
}

export interface StationCreateLoading {
    type: typeof STATION_CREATE_LOADING
}

export interface StationCreateSuccess {
    type: typeof STATION_CREATE_SUCCESS
    payload: StationCreate
    code: string | number
}

export interface StationCreateFail {
    type: typeof STATION_CREATE_FAIL
    message: StationCreate
    code: string | number
}


export type StationActionDispatch = | StationCreateLoading | StationCreateSuccess | StationCreateFail