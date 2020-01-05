import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RestserviceService } from './restservice.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  cookie: string;
  constructor(public restservice: RestserviceService, public cookieService: CookieService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.cookie = this.cookieService.get('sesstoken');
      if (this.cookie !== '') {
        return true;
    }
  }
}
