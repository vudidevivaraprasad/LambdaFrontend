import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router'
import { inject } from '@angular/core';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const AuthDetails = inject(AuthDetailsStoreService)

  return AuthDetails.state$.pipe(
    take(1),
    map(user => {
      return user.isLogin? true:router.createUrlTree(['/login']);
    })
  )
};
