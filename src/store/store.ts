import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StationAction } from './actions/StationActions';
import { stationReducer, StationState } from './reducers/StationReducer';


export interface RootState {
    readonly stations: StationState
}

const rootReducer = combineReducers<RootState>({
    stations: stationReducer
});


export type RootActions = StationAction; // adding pipeline for multiple RootActions


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
    )
);