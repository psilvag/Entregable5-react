import { createSlice } from "@reduxjs/toolkit"

const cardsConfig=createSlice({
    name:'cardsConfig',
    initialState:'',
    reducers:{
    setGlobalCardsConfig:(state,action)=>action.payload
    }
})

export const {setGlobalCardsConfig}=cardsConfig.actions
export default cardsConfig.reducer