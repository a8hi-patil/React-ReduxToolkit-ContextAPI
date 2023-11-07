import { createSlice } from "@reduxjs/toolkit"

const state = {count : 1}

const AppSlice = createSlice({
    name :"App Slice",
    initialState : state,
    reducers:{
        increment:(state,payload)=>{
            state.count = state.count + 1
        },
        decrement:(state,payload)=>{
            state.count = state.count -1
        }
    }
})

export const {increment,decrement} = AppSlice.actions
export default AppSlice.reducer