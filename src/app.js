import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import configureStore from "./store/configureStore"
import { addExpences, editExpences, removeExpences } from "./actions/expenses"
import { setTextFilter, sortByAmount, sortByDate, endDate, startDate } from "./actions/filters"
import getVesibleExpences from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpences({ description: "water bill", amount: 2200, createdAt: 12 }));
store.dispatch(addExpences({ description: "gas bill", amount: 4000, createdAt: 1233 }));
store.dispatch(addExpences({ description: "rent", amount: 2000, createdAt: 133233 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => store.dispatch(setTextFilter("bill")), 3000);

const state = store.getState();
const visibleState = getVesibleExpences(state.expences, state.filters)
console.log(state);
console.log(visibleState);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
