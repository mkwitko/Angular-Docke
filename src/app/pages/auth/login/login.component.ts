import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/db/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  public user: User = {};

  constructor(
    private fb: FormBuilder,
    private nav: NavigationService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  goTo(url: string){
    this.nav.goTo(url);
  }

  login(){
    if(this.loginForm.valid){
      this.user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.auth.login(this.user);
    }
  }

}
