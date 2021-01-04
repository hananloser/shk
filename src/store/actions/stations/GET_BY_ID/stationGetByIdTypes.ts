
/**
 * Types ACTIONS STATIONS
 * types for get data
 */
export const STATION_BY_ID_LOADING = 'STATION_BY_ID_LOADING'
export const STATION_BY_ID_SUCCESS = 'STATION_BY_ID_SUCCESS'
export const STATION_BY_ID_ERROR = 'STATION_BY_ID_ERROR'

/**
 * Update Station
 * states
 */
export const STATIONN_UPDATE_LOADING = 'STATION_UPDATE_LOADING'
export const STATION_UPDATE_SUCCESS = 'STATION_UPDATE_SUCCESS'
export const STATION_UPDATE_FAIL = 'STATION_UPDATE_FAIL'


export const STATION_BY_ID_DELETED_LOADING = 'STATION_BY_ID_DELETED_LOADING'
export const STATION_BY_ID_DELETED = 'STATION_BY_ID_DELETED'
export const STATION_BY_ID_DELETED_FAIL = 'STATION_BY_ID_DELETED_FAIL'

/**
 * FIELD From API
 */
export interface Station {
    id: string,
    name_station: string,
    no_station: string,
    phone_number: string,
    location: string,
    location_link: string,
}
/**
 * Every Station Accept TO Array So We Can Iterate 
 */
export type StationGetByIdType = {
    data: Station
}

export interface StationByIdLoading {
    type: typeof STATION_BY_ID_LOADING
}

export interface StationByIdSuccess {
    type: typeof STATION_BY_ID_SUCCESS,
    payload: StationGetByIdType
}

export interface StationByIdError {
    type: typeof STATION_BY_ID_ERROR
}


/**
 * Interface State for Update Station
 * 
 */
export interface StationUpdateLoading {
    type: typeof STATIONN_UPDATE_LOADING
}

export interface StationUpdateSuccess {
    type: typeof STATION_UPDATE_SUCCESS
    payload: Station
}

/**
 * @todo make safe error types
 */
export interface StationUpdateFail {
    type: typeof STATION_UPDATE_FAIL
    error: any
}

export interface StationDeleteLoading {
    type: typeof STATION_BY_ID_DELETED_LOADING
}

export interface StationDelete {
    type: 'STATION_BY_ID_DELETED',
    message: string
}

export interface StationDeleteFail {
    type: typeof STATION_BY_ID_DELETED_FAIL,
    message: string | Object
}


export type StationByIdDispatchTypes =
    | StationByIdLoading
    | StationByIdSuccess
    | StationByIdError
    | StationUpdateLoading
    | StationUpdateSuccess
    | StationUpdateFail
    | StationDelete
    | StationDeleteFail
    | StationDeleteLoading