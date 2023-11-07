const reducer =(state,action)=>{

    switch(action.type){
        case "INC":
        state.count = state.count + 1
        return {...state}
        
        case "DEC":
            state.count = state.count -1
            return {...state}
    }

    return state

} 

export default reducer