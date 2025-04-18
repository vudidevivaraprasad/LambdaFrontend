import { Injectable } from '@angular/core';
import {ClearCart, Store} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/Interfaces/AuthInterface';
import {AddToCart,RemoveFromCart} from '../Store'
import { ApiService } from 'src/app/services/api.service';
import AuthDetailsStoreService from '../Auth/AuthDetails.service';

type CartAction = ReturnType<typeof AddToCart> | ReturnType<typeof RemoveFromCart> | ReturnType<typeof ClearCart>

@Injectable({
  providedIn: 'root'
})


export default class CartDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Cart>(this.store.getState().Cart);
  public state$ = this.stateSubject.asObservable();

  constructor(private api:ApiService,private auth:AuthDetailsStoreService) {
    this.store.subscribe(() => {
      const state = this.store.getState().Cart;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Cart;
  }

  dispatch(action: CartAction) {
    if(action.type == AddToCart.type){
      if(this.auth.getState().isLogin){
        console.log('user logged in')
        this.api.AddToCart(action.payload.id)
          .subscribe(data => console.log('added to cart',data),
            err => {
              this.store.dispatch(RemoveFromCart(action.payload))
            })
      }
    }
    if(action.type == RemoveFromCart.type){
      if(this.auth.getState().isLogin){
        console.log('user logged in')
        this.api.RemoveFromCart(action.payload.id)
          .subscribe(data => console.log('Removed from cart',data),
            err => {
              this.store.dispatch(AddToCart(action.payload))
            })
      }
    }
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
