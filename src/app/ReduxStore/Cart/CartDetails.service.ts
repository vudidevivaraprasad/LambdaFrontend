import { Injectable } from '@angular/core';
import {Store,SetLoading} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { User,Loading, Cart } from 'src/app/Interfaces/AuthInterface';
import {AddToCart,RemoveFromCart} from '../Store'

type CartAction = ReturnType<typeof AddToCart> | ReturnType<typeof RemoveFromCart>

@Injectable({
  providedIn: 'root'
})


export default class CartDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Cart>(this.store.getState().Cart);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().Cart;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Cart;
  }

  dispatch(action: CartAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
