import { createSlice } from "@reduxjs/toolkit";

export interface Product  {
        title : string;
        description: string;
        image : string;
        price : number;
    
}
interface RootState{
    Products : Product[]; 
    card : Product[];
}
const initialState : RootState  = {
    Products: [],
    card: []}

    export const shop = createSlice({
        name : 'shop',
        initialState,
        reducers:{
            make : (state , action) =>
                {
                    const newObject : Product ={
                        title : action.payload.object.title,
                        description : action.payload.object.description,
                        image : action.payload.object.image,
                        price : action.payload.object.price
                    }
                    if(action.payload.index-1  === state.Products.length)
                        state.Products.push(newObject);
                }
        }
    })
    export const { make } = shop.actions;
    export default shop.reducer;
