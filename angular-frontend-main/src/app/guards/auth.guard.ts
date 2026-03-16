import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.auth.user;
    const requiredRole = route.data['role'];

    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    if (requiredRole && user.role !== requiredRole) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
