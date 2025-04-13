import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { Loading } from "src/app/Interfaces/AuthInterface";


const initialState:Loading = {
  isLoading:false
}

export const LoadingSlice = createSlice({
  name: 'AuthDetails',
  initialState,
  reducers:{
    SetLoading: (state,action:PayloadAction<Loading>)=>{
      if(state.isLoading !== action.payload.isLoading){
        state.isLoading = action.payload.isLoading
      }
    }
  }
})
