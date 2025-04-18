import { inject } from "@angular/core";
import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Cart,Product } from "src/app/Interfaces/AuthInterface";
import { ApiService } from "src/app/services/api.service";
import AuthDetailsStoreService from "../Auth/AuthDetails.service";


const initialState:Cart = {
  items:[]
}

export const CartSlice = createSlice({
  name: 'CartDetails',
  initialState,
  reducers:{
    AddToCart: (state,action:PayloadAction<Product>) => {
      const found = state.items.find(item => item.id === action.payload.id)
      if(!found){
        state.items = [...state.items,action.payload]
      }
    },
    RemoveFromCart : (state,action:PayloadAction<Product>) => {
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
