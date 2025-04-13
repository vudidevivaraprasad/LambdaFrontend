import { configureStore } from "@reduxjs/toolkit";
import {AuthSlice} from './Auth/AuthStore'
import { LoadingSlice } from "./Loading/LoadingStore";
import { SkeletonLoadingSlice } from "./SkeletonLoading/SkeletonLoadingStore";

export const Store = configureStore({
  reducer:{
    AuthDetails:AuthSlice.reducer,
    Loading:LoadingSlice.reducer,
    SkeletonLoading:SkeletonLoadingSlice.reducer
  },
  devTools:true
})

export const {LoginUser,LogoutUser} = AuthSlice.actions
export const {SetLoading} = LoadingSlice.actions
export const {SetSkeletonLoading} = SkeletonLoadingSlice.actions
