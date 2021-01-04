import { Dispatch } from 'redux'
import { API } from '../../../../services/api'
import { Cookies } from 'react-cookie'
import { StationActionDispatch, STATION_CREATE_FAIL, STATION_CREATE_SUCCESS } from './StationCreateActionTypes'
const cookies = new Cookies()

export const storeStation = (station) => async (dispatch: Dispatch<StationActionDispatch>) => {
    try {
        // Call STATE
        dispatch({ type: 'STATION_CREATE_LOADING' })
        // Fetch To API
        const res = await API.post(`api/v1/user`, station, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })

        dispatch({ type: STATION_CREATE_SUCCESS, payload: res.data, code: res.status })

    } catch (error) {
        console.log(error.response.data)
        dispatch({ type: STATION_CREATE_FAIL, message: error.response.data, code: 422 })
    }
}