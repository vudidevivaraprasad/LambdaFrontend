import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { AllProducts, Cart,Product } from "src/app/Interfaces/AuthInterface";


const initialState:AllProducts = {
  result:[]
}

export const ProductsSlice = createSlice({
  name: 'CartDetails',
  initialState,
  reducers:{
    AddProduct: (state,action:PayloadAction<Product>) => {
        state.result = [...state.result,action.payload]
    }
  }
})
