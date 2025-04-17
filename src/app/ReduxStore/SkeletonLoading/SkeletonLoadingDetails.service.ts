import { Injectable } from '@angular/core';
import {Store,SetSkeletonLoading} from '../Store'
import { BehaviorSubject } from 'rxjs';
import { Loading } from 'src/app/Interfaces/AuthInterface';

type SkeletingLoadingAction = ReturnType<typeof SetSkeletonLoading>

@Injectable({
  providedIn: 'root'
})
export default class SkeletonLoadingDetailsStoreService {
  private store = Store;

  private stateSubject = new BehaviorSubject<Loading>(this.store.getState().SkeletonLoading);
  public state$ = this.stateSubject.asObservable();

  constructor() {
    this.store.subscribe(() => {
      const state = this.store.getState().SkeletonLoading;
      this.stateSubject.next(state);
    });
  }

  getState() {
    return this.store.getState().SkeletonLoading;
  }

  dispatch(action: SkeletingLoadingAction) {
    this.store.dispatch(action);
  }

  subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }
}
