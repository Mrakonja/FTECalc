
const returnFte = (state, action) =>{
    if (state===undefined){
        state = 0;
    }

    if(action.type=='SET_FTE'){
        return action.fte; 
    } else {
        return state
    }
}

export default returnFte;