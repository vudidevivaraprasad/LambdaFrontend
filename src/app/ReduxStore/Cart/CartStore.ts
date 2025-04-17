import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Cart,Product } from "src/app/Interfaces/AuthInterface";


const initialState:Cart = {
  items:[]
}

export const CartSlice = createSlice({
  name: 'CartDetails',
  initialState,
  reducers:{
    AddToCart: (state,action:PayloadAction<Product>) => {
      const found = state.items.find(item => item.id === action.payload.id)
      console.log('found',found)
      if(!found){
        state.items = [...state.items,action.payload]
      }
    },
    RemoveFromCart : (state,action:PayloadAction<Product>) => {
      console.log('state',state.items)
      console.log('action',action.payload)
      const found = state.items.find(item => item.id === action.payload.id)
      if(found){
        state.items = state.items.filter(data => data.id!=action.payload.id)
      }
    },
    ClearCart: (state) => {
      state.items = []
    }
  }
})
