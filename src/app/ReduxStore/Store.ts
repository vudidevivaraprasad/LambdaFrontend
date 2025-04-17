import { configureStore } from "@reduxjs/toolkit";
import {AuthSlice} from './Auth/AuthStore'
import { LoadingSlice } from "./Loading/LoadingStore";
import { SkeletonLoadingSlice } from "./SkeletonLoading/SkeletonLoadingStore";
import { CartSlice } from "./Cart/CartStore";
import { WishlistSlice } from "./Wishlist/WishlistStore";
import AddressDetailsStoreService from "./Address/AddressDetails.service";
import { AddressSlice } from "./Address/AddressStore";

export const Store = configureStore({
  reducer:{
    AuthDetails:AuthSlice.reducer,
    Loading:LoadingSlice.reducer,
    SkeletonLoading:SkeletonLoadingSlice.reducer,
    Cart: CartSlice.reducer,
    Wishlist: WishlistSlice.reducer,
    Address: AddressSlice.reducer
  },
  devTools:true
})

export const {LoginUser,LogoutUser} = AuthSlice.actions
export const {SetLoading} = LoadingSlice.actions
export const {SetSkeletonLoading} = SkeletonLoadingSlice.actions
export const {AddToCart,RemoveFromCart} = CartSlice.actions
export const {AddToWishlist,RemoveFromWishlist} = WishlistSlice.actions
export const {AddToAddress,RemoveFromAddress} = AddressSlice.actions
