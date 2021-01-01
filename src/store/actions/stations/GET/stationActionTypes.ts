/**
 * Types ACTIONS STATIONS
 */
export const STATION_LOADING = 'STATION_LOADING'
export const STATION_SUCCESS = 'STATION_SUCCESS'
export const STATION_ERROR = 'STATION_ERROR'

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
export type StationType = {
    data: Station[]
}

export interface StationLoading {
    type: typeof STATION_LOADING
}

export interface StationSuccess {
    type: typeof STATION_SUCCESS,
    payload: StationType
}

export interface StationError {
    type: typeof STATION_ERROR
}

export type StationDispatchTypes = StationLoading | StationSuccess | StationError 