import { Dispatch } from "react"
import { API } from "../../../../services/api"
import { STATION_BY_ID_ERROR, STATION_BY_ID_LOADING, STATION_BY_ID_SUCCESS , StationByIdDispatchTypes } from "./stationGetByIdTypes"
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const GetStationById = (stationId: string) => async (dispatch: Dispatch<StationByIdDispatchTypes>) => {
    try {
        // Call STATE
        dispatch({ type: STATION_BY_ID_LOADING })
        // Fetch To API
        const res = await API.get('api/v1/stations/' + stationId, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })
        dispatch({ type: STATION_BY_ID_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: STATION_BY_ID_ERROR })
    }
}