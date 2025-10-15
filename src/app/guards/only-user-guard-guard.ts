import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { auth } from '../services/auth';
import { inject } from '@angular/core';

export const onlyUserGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(auth)
  const router = inject(Router);
  if(!authService.token){
  const redirectPath = router.parseUrl("/login");
    return new RedirectCommand(redirectPath, {
      skipLocationChange: true,
    });
  }
  return true;
};
