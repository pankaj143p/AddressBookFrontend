import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  template : `
  <app-persondetails></app-persondetails>
  <app-addressbookform></app-addressbookform>
  `,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
    logo='addressbooklogo.png';
}
