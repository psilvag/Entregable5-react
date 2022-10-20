import { createSlice } from "@reduxjs/toolkit"

const userName=createSlice({
    name:'userName',
    initialState:'',
    reducers:{
    setGlobalUser:(state,action)=>action.payload
    }
})



export const {setGlobalUser}=userName.actions
export default userName.reducer
