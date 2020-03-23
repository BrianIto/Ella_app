import {createStore, combineReducers} from "redux";
import GeneralReducer from "./reducers/GeneralReducer";

export const Store = createStore(combineReducers({
    general: GeneralReducer,
}));
