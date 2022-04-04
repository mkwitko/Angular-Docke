import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/auth/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User){
    this.http.post(environment.endPoint, user)
    .subscribe(res => {
      const token = (<any>res).token;
      localStorage.setItem(environment.token, token);
    });
  }

  logout(){
    localStorage.removeItem(environment.token);
  }
}
