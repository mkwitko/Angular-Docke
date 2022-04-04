import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private nav: NavigationService
  ) { }

  ngOnInit(): void {
  }

  goTo(url: string){
    this.nav.goTo(url);
  }

}
