import { Injectable } from '@angular/core';
import {Store} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/Interfaces/AuthInterface';

@Injectable({
  providedIn: 'root'
})
export default class AuthDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<User>(this.store.getState().AuthDetails);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().AuthDetails;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().AuthDetails;
  }

  dispatch(action: any) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
