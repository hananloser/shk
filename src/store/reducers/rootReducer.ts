import { combineReducers } from "redux";
import { stationReducer } from "./station/stationReducer";
import { stationByIdReducer } from './station/stationByIdReducer'
const RootReducer = combineReducers({
    stations: stationReducer,
    station: stationByIdReducer
});

export default RootReducer