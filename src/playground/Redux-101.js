import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({setBy = 0} = {}) => ({
    type: 'SET',
    setBy
});

const resetCount = () => ({
    type: "RESET"
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
    
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return {
                count: action.setBy
            }

        case 'RESET':
            return {
                count: 0
            };

        default: return state;
    }
};



const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(resetCount());

store.dispatch(setCount({setBy: 100}));

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "RESET" });
// store.dispatch({ 
//     type: "DECREMENT" ,
//     decrementBy: 10
// });


