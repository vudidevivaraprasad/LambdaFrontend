import { Injectable } from '@angular/core';
import {Store,AddProduct} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { AllProducts } from 'src/app/Interfaces/AuthInterface';

type ProductsAction = ReturnType<typeof AddProduct>

@Injectable({
  providedIn: 'root'
})


export default class ProductsDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<AllProducts>(this.store.getState().Products);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().Products;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Products;
  }

  dispatch(action: ProductsAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
