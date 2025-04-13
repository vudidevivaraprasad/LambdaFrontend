import { configureStore } from "@reduxjs/toolkit";
import {AuthSlice} from './Auth/AuthStore'
import { LoadingSlice } from "./Loading/LoadingStore";

export const Store = configureStore({
  reducer:{
    AuthDetails:AuthSlice.reducer,
    Loading:LoadingSlice.reducer
  },
  devTools:true
})

export const {LoginUser,LogoutUser} = AuthSlice.actions
export const {SetLoading} = LoadingSlice.actions
