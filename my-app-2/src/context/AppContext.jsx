import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/AppReducer";
const initialState = {
    count : 12
}

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const incrementCount = () =>{
        dispatch({type:"INC"})
    }
    const decrementCount = () =>{
        dispatch({type:"DEC"})
    }
    return(

        <AppContext.Provider value={{state,incrementCount,decrementCount}}  >{children}</AppContext.Provider>

    )

}

const useAppContext = () =>{
    return useContext(AppContext)
}
export {useAppContext};
export default AppProvider;