import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Address, AddressList, Cart,Product } from "src/app/Interfaces/AuthInterface";


const initialState:AddressList = {
  items:[]
}

export const AddressSlice = createSlice({
  name: 'AddressDetails',
  initialState,
  reducers:{
    AddToAddress: (state,action:PayloadAction<Address>) => {
        state.items = [...state.items,action.payload]
    },
    RemoveFromAddress : (state,action:PayloadAction<number>) => {
        state.items = state.items.filter((data,index) => index!=action.payload)
    }
  }
})
