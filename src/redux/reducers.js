import {combineReducers} from 'redux';
const fteState = 2080

const fteReducer = (state=fteState, action) => {
    switch(action.type){
        case 'ADD_FTE':
            return state = action.fte
        default:
            return state
    }
}

const aldReducer = (state=0, action) => {
    switch(action.type){
        case 'ADD_ALD':
            return state = action.ald
        default:
            return state
    }
}
const phReducer = (state=0, action) => {
    switch(action.type){
        case 'ADD_PH':
            return state = action.ph
        default:
            return state
    }
}

const activityCounter = (state=[], action) => {
    switch(action.type){
        case 'ADD_ACTIVITY':
            return [...state, action.activity];
        default:
            return state
    }
}

export default combineReducers({
    fte: fteReducer,       
    activityCounter,
    ald: aldReducer,
    ph: phReducer

})


