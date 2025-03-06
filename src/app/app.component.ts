import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressformComponent } from './components/addressform/addressform.component';

@Component({
  selector: 'app-root',
  imports: [AddressformComponent],
  // template: `
  // `
  template : `
  <app-addressform></app-addressform>
  <!-- <h1 class="text-3xl font-bold underline">Hello World</h1> -->
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'addressbook';
}
