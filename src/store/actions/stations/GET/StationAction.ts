import { Dispatch } from 'redux'
import { API } from '../../../../services/api'
import { StationDispatchTypes, STATION_ERROR, STATION_LOADING, STATION_SUCCESS } from './stationActionTypes'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const GetStation = (search: string = '') => async (dispatch: Dispatch<StationDispatchTypes>) => {
    try {
        // Call STATE
        dispatch({ type: STATION_LOADING })

        // Fetch To API
        const res = await API.get(`api/v1/stations?keyword=${search}`, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })
        dispatch({ type: STATION_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: STATION_ERROR })
    }
}