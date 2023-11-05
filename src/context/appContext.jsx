import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/appReducer'
//Creating App's Initial State
const initialState = { count :1 }


const appContext = createContext()

const AppProvider = ({children}) =>{

//Creating Reducer

const [state,dispatch] = useReducer(reducer,initialState)

// Creating reducer functions

// Method for increment counter
const incrementCount = () =>{
    dispatch({type:'INCREMENT'})
}

// Method for decrement counter
const decrementCount = () =>{
    dispatch({type:'DECREMENT'})
}

return <appContext.Provider value={{state,incrementCount,decrementCount}} >{children}</appContext.Provider>

}


const useAppContext = () =>{
    return useContext(appContext)
}

export {AppProvider,useAppContext}