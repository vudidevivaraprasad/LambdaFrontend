import { Injectable } from '@angular/core';
import {Store,SetLoading} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { Loading } from 'src/app/Interfaces/AuthInterface';

type LoadingAction = ReturnType<typeof SetLoading>

@Injectable({
  providedIn: 'root'
})
export default class LoadingDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Loading>(this.store.getState().Loading);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().Loading;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().Loading;
  }

  dispatch(action: LoadingAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
