import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {ApiService} from './api.service';
import { LoginUser, LogoutUser } from '../ReduxStore/Store';
import AuthDetailsStoreService from '../ReduxStore/Auth/AuthDetails.service';

@Injectable({ providedIn: 'root' })
export class AuthInitService {
  constructor(private api: ApiService,private authstore:AuthDetailsStoreService) {

  }

  async init(): Promise<void> {
    try {
      const data = await firstValueFrom(this.api.AuthVerification());

      if (data.message === 'admin') {
        this.authstore.dispatch(LoginUser({ isLogin: true, isAdmin: true }));
      } else if (data.message === 'regular') {
        this.authstore.dispatch(LoginUser({ isLogin: true, isAdmin: false }));
      } else {
        this.authstore.dispatch(LogoutUser());
      }
    } catch (error) {
      this.authstore.dispatch(LogoutUser());
      console.error('Auth init failed:', error);
    }
  }
}
