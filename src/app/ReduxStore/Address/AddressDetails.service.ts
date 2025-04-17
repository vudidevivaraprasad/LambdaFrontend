import { Injectable } from '@angular/core';
import {Store,AddToAddress,RemoveFromAddress} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { AddressList } from 'src/app/Interfaces/AuthInterface';

type AddressAction = ReturnType<typeof AddToAddress> | ReturnType<typeof RemoveFromAddress>

@Injectable({
  providedIn: 'root'
})


export default class AddressDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<AddressList>(this.store.getState().Address);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().Address;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Address;
  }

  dispatch(action: AddressAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
