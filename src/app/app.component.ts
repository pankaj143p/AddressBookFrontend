import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersondetailsComponent } from './components/persondetails/persondetails.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent,PersondetailsComponent],
  // template: `
  // `
  template : `
  <app-dashboard></app-dashboard>
  <app-persondetails></app-persondetails>

  <!-- <h1 class="text-3xl font-bold underline">Hello World</h1> -->
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'addressbook';
}
