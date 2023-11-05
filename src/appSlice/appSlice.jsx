import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 5
}

const appSlice = createSlice({
    name:'appSlice',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count = state.count + 1
        },
        decrement :(state,action)=>{
            state.count = state.count - 1
            
        },
    }
})

export const {increment,decrement} = appSlice.actions
export default appSlice.reducer