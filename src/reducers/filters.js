//action generator for filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
export default (state = filterReducerDefaultState, action) => {
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
