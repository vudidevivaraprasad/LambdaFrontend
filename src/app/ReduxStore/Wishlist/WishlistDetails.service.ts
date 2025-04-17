import { Injectable } from '@angular/core';
import {Store,AddToWishlist, RemoveFromWishlist, ClearWishlist} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { Wishlist } from 'src/app/Interfaces/AuthInterface';

type WishlistAction = ReturnType<typeof AddToWishlist> | ReturnType<typeof RemoveFromWishlist> | ReturnType<typeof ClearWishlist>

@Injectable({
  providedIn: 'root'
})


export default class WishlistDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Wishlist>(this.store.getState().Wishlist);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().Wishlist;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Wishlist;
  }

  dispatch(action: WishlistAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
