import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  sidenav=true;

  marginLeft=-180;

  toggleButtons: string[] = [
    "Form",
    "Response",
    "User",
    "Map"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  togglesidenav() {
    this.sidenav=!this.sidenav;
  }

  openSidenav(event: Boolean) {
    console.log(event);
    this.marginLeft=0;

  }

  closeSidenav(event: Boolean) {
    console.log(event);
    this.marginLeft+=-180;
  }



}
