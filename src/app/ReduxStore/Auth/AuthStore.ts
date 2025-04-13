import { configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import {User} from '../../Interfaces/AuthInterface'

const initialState:User = {
  isLogin: false,
  isAdmin: false
}

export const AuthSlice = createSlice({
  name: 'AuthDetails',
  initialState,
  reducers:{
    LoginUser: (state,action:PayloadAction<User>)=>{
      if(state.isLogin !== action.payload.isLogin || state.isAdmin !== action.payload.isAdmin){
        state.isLogin=action.payload.isLogin;
        state.isAdmin=action.payload.isAdmin;
      }
    },
    LogoutUser: (state,action:PayloadAction<{}>) => {
      state.isLogin=false;
      state.isAdmin=false;
    }
  }
})
