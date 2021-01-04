import { combineReducers } from "redux";
import { stationReducer } from "./station/stationReducer";
import { stationByIdReducer } from './station/stationByIdReducer'
import { stationCreateReducer } from './station/stationCreateReducer'
const RootReducer = combineReducers({
    stations: stationReducer,
    station: stationByIdReducer,
    stationCreate : stationCreateReducer
});

export default RootReducer