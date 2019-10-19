import { createStore, combineReducers } from "redux";
import expenceReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

//combine reducers 
export default () => {
    const store = createStore(
        combineReducers({
            expences: expenceReducer,
            filters: filterReducer
        })
    );

    return store;
}