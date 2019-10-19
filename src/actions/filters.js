//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


//SORTBY_DATE
export const sortByDate = () => ({
    type: 'SORTBY_DATE'
})

//SORTBY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
})

//SET_START_DATE
export const startDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})

//SET_END_DATE
export const endDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})