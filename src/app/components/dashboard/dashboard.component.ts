import { Component } from '@angular/core';
import { PersondetailsComponent } from '../persondetails/persondetails.component';

@Component({
  selector: 'app-dashboard',
  imports: [PersondetailsComponent],
  template : `
  <app-persondetails></app-persondetails>
  `,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
    logo='addressbooklogo.png';
}
