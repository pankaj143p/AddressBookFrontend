import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersondetailsComponent } from './components/persondetails/persondetails.component';
import { AddressbookformComponent } from './components/addressbookform/addressbookform.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent,PersondetailsComponent],
  template : `
  <app-dashboard></app-dashboard>
  <app-persondetails></app-persondetails>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'addressbook';
}
