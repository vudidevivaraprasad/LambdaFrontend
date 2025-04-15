import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "src/app/Interfaces/AuthInterface";


const initialState:Cart = {
  items:[]
}

export const CartSlice = createSlice({
  name: 'CartDetails',
  initialState,
  reducers:{
    AddToCart: (state,action:PayloadAction<string>) => {
      if(!state.items.includes(action.payload)){
        state.items = [...state.items,action.payload]
      }
    },
    RemoveFromCart : (state,action:PayloadAction<string>) => {
      if(state.items.includes(action.payload)){
        state.items = state.items.filter(data => data!=action.payload)
      }
    }
  }
})
