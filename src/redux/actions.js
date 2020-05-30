export const setFte = (fte) => {
    return {
        type: 'ADD_FTE',
        fte
    }
}
export const setAld = (ald) => {
    return {
        type: 'ADD_ALD',
        ald
    }
}

export const setPh = (ph) => {
    return {
            type: 'ADD_PH',
            ph
        }
}

export const AddActivity = (activity) => {
    return {
        type: 'ADD_ACTIVITY',
        activity
    }
}
    