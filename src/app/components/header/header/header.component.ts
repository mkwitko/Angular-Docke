import { Component, Input, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from 'src/app/services/navigation/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  companyLogo = '#';
  companyName = 'G4R Projetos';

  @Input() url = '';
  @Input() menu = true;

  constructor(
    private nav: NavigationService
  ) { }

  ngOnInit(): void {
  }

  goTo(url: string){
    this.nav.goTo(url);
  }

}
