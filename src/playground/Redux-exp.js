import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENCES
const addExpences = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
    type: 'ADD_EXPENCES',
    expences: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


//REMOVE_EXPENCES
const removeExpences = ({ id }) => ({
    type: 'REMOVE_EXPENCES',
    id
})


//EDIT_EXPENCES

const editExpences = (id, updates) => ({
    type: 'EDIT_EXPENCES',
    id,
    updates
})

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


//SORTBY_DATE
const sortByDate = () => ({
    type: 'SORTBY_DATE'
})

//SORTBY_AMOUNT
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
})

//SET_START_DATE
const startDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})

//SET_END_DATE
const endDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})


//action generator for expences
const expencesReducerDefaultState = [];
const expenceReducer = (state = expencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCES':
            return [
                ...state, action.expences
            ];

        case 'REMOVE_EXPENCES':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENCES':
            return state.map((value) => {
                if (value.id == action.id) {
                    return {
                        ...value,
                        ...action.updates
                    };
                } else {
                    return value;
                }
            });

        default:
            return state;
    };
};

//action generator for filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: "date"
            }

        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }

        default:
            return state;
    };
}



//combine reducers 
const store = createStore(
    combineReducers({
        expences: expenceReducer,
        filters: filterReducer
    })
);

const getVesibleState = (expences, { text, sortBy, startDate, endDate }) => {
    return expences.filter((item) => {
        const startDateMatch = typeof startDate !== "number" || item.createdAt >= startDate;
        const endDateMatch = typeof endDate != "number" || item.createdAt <= endDate;

        const textMatch = text.toLowerCase().includes(item.description.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVesibleState(state.expences, state.filters)
    console.log(visibleState);
});

const exp1 = store.dispatch(addExpences({ description: "rent", amount: 1000, createdAt: 2000 }));
const exp2 = store.dispatch(addExpences({ description: "xyz", amount: 30, createdAt: -123 }));
// store.dispatch(removeExpences({ id: exp2.expences.id }));

// store.dispatch(editExpences(exp1.expences.id, { amount: 200 }));

store.dispatch(setTextFilter("rentxyz"));

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(startDate(100));
// store.dispatch(startDate());
// store.dispatch(endDate(232222));

const demoState = {
    expenses: [{
        id: "this is id",
        description: "rent",
        note: "fucking rent",
        amount: 550000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'anount',
        startDate: undefined,
        endDate: undefined
    }
};
