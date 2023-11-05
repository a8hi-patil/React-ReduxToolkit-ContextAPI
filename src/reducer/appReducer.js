 const reducer = (state,action)=>{

    switch(action.type){
        case "INCREMENT":
            state.count = state.count +1  
            return {...state}
            
        case "DECREMENT":
            state.count = state.count - 1
            return {...state}
            
        default :
        return state
    }

}

export default reducer;