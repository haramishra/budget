//action generator for expences
const expencesReducerDefaultState = [];
export default (state = expencesReducerDefaultState, action) => {
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
