import { Injectable } from '@angular/core';
import {Store,AddToWishlist, RemoveFromWishlist, ClearWishlist} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { Wishlist } from 'src/app/Interfaces/AuthInterface';
import { ApiService } from 'src/app/services/api.service';
import AuthDetailsStoreService from '../Auth/AuthDetails.service';

type WishlistAction = ReturnType<typeof AddToWishlist> | ReturnType<typeof RemoveFromWishlist> | ReturnType<typeof ClearWishlist>

@Injectable({
  providedIn: 'root'
})


export default class WishlistDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Wishlist>(this.store.getState().Wishlist);
  public state$ = this.stateSubject.asObservable();

  constructor(private api:ApiService,private auth:AuthDetailsStoreService) {
    this.store.subscribe(() => {
      const state = this.store.getState().Wishlist;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Wishlist;
  }

  dispatch(action: WishlistAction) {
    if(action.type == AddToWishlist.type){
      if(this.auth.getState().isLogin){
        console.log('user logged in')
        this.api.AddToWishlist(action.payload.id)
          .subscribe(data => console.log('added to cart',data),
          err => {
            this.store.dispatch(RemoveFromWishlist(action.payload))
          })
      }
    }
    if(action.type == RemoveFromWishlist.type){
      if(this.auth.getState().isLogin){
        console.log('user logged in')
        this.api.RemoveFromWishlist(action.payload.id)
          .subscribe(data => console.log('Removed from cart',data),
          err => {
            this.store.dispatch(AddToWishlist(action.payload))
          })
      }
    }
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
