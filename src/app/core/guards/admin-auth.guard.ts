import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {

        const token = this.authService.getToken();

        if (!!token){
            const role = this.authService.getRoles();
            if(role=='admin' && this.authService.getValidToken(token)){
             return true;
            }
           this.authService.logout()
         }
        return this.router.createUrlTree(['/auth/login']);
    }
}