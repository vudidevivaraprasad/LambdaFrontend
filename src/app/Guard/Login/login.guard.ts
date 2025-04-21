import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
    const AuthDetails = inject(AuthDetailsStoreService)

    return AuthDetails.state$.pipe(
      take(1),
      map(user => {
        return user.isLogin? router.createUrlTree(['/home']):true;
      })
    )
};
