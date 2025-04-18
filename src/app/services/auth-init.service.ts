import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {ApiService} from './api.service';
import { AddProduct, AddToAddress, AddToCart, AddToWishlist, LoginUser, LogoutUser,Store } from '../ReduxStore/Store';
import AuthDetailsStoreService from '../ReduxStore/Auth/AuthDetails.service';
import ProductsDetailsStoreService from '../ReduxStore/Products/ProductDetails.service';

@Injectable({ providedIn: 'root' })
export class AuthInitService {
  store = Store
  constructor(private api: ApiService,private authstore:AuthDetailsStoreService,private productservice:ProductsDetailsStoreService) {

  }

  async init(): Promise<void> {
    try {
      const data = await firstValueFrom(this.api.AuthVerification());
      const products = await firstValueFrom(this.api.Products())

      products.result.map(product => this.productservice.dispatch(AddProduct(product)))

      if (data.message === 'admin') {
        this.authstore.dispatch(LoginUser({ isLogin: true, isAdmin: true }));
      } else if (data.message === 'regular') {
        this.authstore.dispatch(LoginUser({ isLogin: true, isAdmin: false }));
      } else {
        this.authstore.dispatch(LogoutUser());
      }

      if(data.message === 'admin' || 'regular'){
        const userdetails = await firstValueFrom(this.api.UserDetails())
        userdetails.data.cart.map(item => {
          const product = this.productservice.getState().result.find(product => product.id === item)
          console.log('product',product)
          product?this.store.dispatch(AddToCart(product)):''
        })
        userdetails.data.wishlist.map(item => {
          const product = this.productservice.getState().result.find(product => product.id === item)
          console.log('product',product)
          product?this.store.dispatch(AddToWishlist(product)):''
        })
        userdetails.data.address.map(item => this.store.dispatch(AddToAddress(item)))
        document.getElementById('global-loader')?.remove()
      }
    } catch (error) {
      this.authstore.dispatch(LogoutUser());
      console.error('Auth init failed:', error);
    }
  }
}
