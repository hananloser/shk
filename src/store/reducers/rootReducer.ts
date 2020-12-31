import { combineReducers } from "redux";
import { stationReducer } from "./station/stationReducer";

const RootReducer = combineReducers({
    stations: stationReducer
});

export default RootReducer