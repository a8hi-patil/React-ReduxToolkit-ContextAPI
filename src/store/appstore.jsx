import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../appSlice/appSlice";
const appStore = configureStore(
    {
    reducer:appReducer,
}
)

export default appStore