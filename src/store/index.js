import { configureStore } from "@reduxjs/toolkit"
import userNameSlice from "./slices/userNameSlice"
import numberCardsConfig from "./slices/numberCardsConfig"

export default configureStore({
    reducer:{
        userNameSlice,
        numberCardsConfig
    }
})