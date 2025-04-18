import { Injectable } from '@angular/core';
import {Store,AddToAddress,RemoveFromAddress, ClearAddress} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { AddressList } from 'src/app/Interfaces/AuthInterface';
import { ApiService } from 'src/app/services/api.service';
import AuthDetailsStoreService from '../Auth/AuthDetails.service';

type AddressAction = ReturnType<typeof AddToAddress> | ReturnType<typeof RemoveFromAddress> | ReturnType<typeof ClearAddress>

@Injectable({
  providedIn: 'root'
})


export default class AddressDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<AddressList>(this.store.getState().Address);
  public state$ = this.stateSubject.asObservable();

  constructor(private api:ApiService,private auth:AuthDetailsStoreService) {
    this.store.subscribe(() => {
      const state = this.store.getState().Address;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Address;
  }

  dispatch(action: AddressAction) {
    if(action.type == AddToAddress.type){
          if(this.auth.getState().isLogin){
            console.log('user logged in')
            this.api.AddAddress(action.payload)
              .subscribe(data => console.log('added to cart',data),
                err => {
                  this.store.dispatch(RemoveFromAddress(action.payload))
                })
          }
        }
        if(action.type == RemoveFromAddress.type){
          if(this.auth.getState().isLogin){
            console.log('user logged in')
            this.api.RemoveAddress(action.payload.id)
              .subscribe(data => console.log('Removed from cart',data),
                err => {
                  this.store.dispatch(AddToAddress(action.payload))
                })
          }
        }
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
