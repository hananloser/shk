import { Reducer } from "redux";
import { StationAction, StationActionsTypes } from "../actions/StationActions";

export interface Station {
    name: string,
    no_spbu: string,
}

export interface Stations {
    [id: string]: Station,
}

export interface StationState {
    items: Stations,
    loading: boolean,
    error: string | null
}

const initialState = {
    items: {},
    loading: false,
    error: null
};

export const stationReducer: Reducer<StationState, StationAction> =
    (state = initialState, action) => {
        switch (action.type) {
            case StationActionsTypes.FETCH_STATION:
            case StationActionsTypes.FETCH_STATION_SUCCESS:
            case StationActionsTypes.FETCH_STATION_FAIL:
            default:
                return state
        }
    }