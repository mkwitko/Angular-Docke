import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(
    private nav: NavigationService
  ) { }

  ngOnInit(): void {
  }

  goTo(url: string){
    this.nav.goTo(url);
  }

}
