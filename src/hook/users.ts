import { createSlice } from "@reduxjs/toolkit";
export interface TypeUsername
{
    username: string 
}
const initialState : TypeUsername =
{
    username: ""
}

export const userSlice  = createSlice({
    name : 'user',
    initialState,
    reducers :
    {
        login : (state , action)=>
            {
                console.log(state.username)
                state.username = action.payload
            },
        logout:(state) =>
            {
                console.log(state.username)
                state.username = "";
                
            }
    }
})
export const {login , logout} = userSlice.actions