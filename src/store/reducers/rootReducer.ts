import { combineReducers } from "redux";
import { stationReducer } from "./station/stationReducer";
import { stationByIdReducer } from './station/stationByIdReducer'
import { stationCreateReducer } from './station/stationCreateReducer'
import { productReducer } from "./products/ProductReducer";
const RootReducer = combineReducers({
    stations: stationReducer,
    station: stationByIdReducer,
    stationCreate: stationCreateReducer,
    product: productReducer
});

export default RootReducer