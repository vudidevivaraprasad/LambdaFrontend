import { Injectable } from '@angular/core';
import {LoginUser, LogoutUser, Store} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/Interfaces/AuthInterface';

type AuthAction = ReturnType<typeof LoginUser> | ReturnType<typeof LogoutUser>

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

  dispatch(action: AuthAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
