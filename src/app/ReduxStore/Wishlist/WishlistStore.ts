import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Wishlist,Product } from "src/app/Interfaces/AuthInterface";


const initialState:Wishlist = {
  items:[]
}

export const WishlistSlice = createSlice({
  name: 'WishlistDetails',
  initialState,
  reducers:{
    AddToWishlist: (state,action:PayloadAction<Product>) => {
      const found = state.items.find(item => item.id === action.payload.id)
      console.log('found',found)
      if(!found){
        state.items = [...state.items,action.payload]
      }
    },
    RemoveFromWishlist : (state,action:PayloadAction<Product>) => {
      console.log('state',state.items)
      console.log('action',action.payload)
      const found = state.items.find(item => item.id === action.payload.id)
      if(found){
        state.items = state.items.filter(data => data.id!=action.payload.id)
      }
    },
    ClearWishlist: (state) => {
      state.items = []
    }
  }
})
