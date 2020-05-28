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

const activityCounter = (state=[], action) => {
    switch(action.type){
        case 'ADD_ACTIVITY':
            return [...state, action.activity];
        case 'REMOVE_ACTIVITY':
            return state.pop(action.activity);
        default:
            return state
    }
}

export default combineReducers({
    fte: fteReducer,       
    activityCounter,
})


