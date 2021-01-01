
/**
 * Types ACTIONS STATIONS
 */
export const STATION_BY_ID_LOADING = 'STATION_BY_ID_LOADING'
export const STATION_BY_ID_SUCCESS = 'STATION_BY_ID_SUCCESS'
export const STATION_BY_ID_ERROR   = 'STATION_BY_ID_ERROR'

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

export type StationByIdDispatchTypes = StationByIdLoading | StationByIdSuccess | StationByIdError 