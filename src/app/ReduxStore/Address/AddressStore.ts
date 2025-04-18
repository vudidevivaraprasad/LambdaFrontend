import { inject } from "@angular/core";
import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Address, AddressList, Cart,Product } from "src/app/Interfaces/AuthInterface";
import { ApiService } from "src/app/services/api.service";


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
    RemoveFromAddress : (state,action:PayloadAction<Address>) => {
        state.items = state.items.filter(data => data.id!=action.payload.id)
    },
    ClearAddress: (state) => {
      state.items = []
    }
  }
})
