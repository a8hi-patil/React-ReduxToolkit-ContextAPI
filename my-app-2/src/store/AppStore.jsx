import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slice/AppSLice";
const AppStore = configureStore({
    reducer:reducer
})

export default AppStore;