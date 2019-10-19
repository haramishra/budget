import uuid from 'uuid';

//ADD_EXPENCES
export const addExpences = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
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
export const removeExpences = ({ id }) => ({
    type: 'REMOVE_EXPENCES',
    id
})


//EDIT_EXPENCES

export const editExpences = (id, updates) => ({
    type: 'EDIT_EXPENCES',
    id,
    updates
})
