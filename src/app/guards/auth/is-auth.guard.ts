import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor(
    private nav: NavigationService,
    private jwtHelper: JwtHelperService
  )
  {

  }

  canActivate(){
    const token = localStorage.getItem(environment.token);
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.nav.goTo("login");
    return false;
  }
  
}
