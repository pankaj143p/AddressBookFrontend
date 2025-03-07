import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface Person {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-addressbookform',
  imports: [FormsModule,FontAwesomeModule],
  templateUrl: './addressbookform.component.html',
  styleUrl: './addressbookform.component.scss'
})
export class AddressbookformComponent {
  faCoffee = faCircleXmark;
  // entries: any[] = [];
  errMsg: string = '';
  person: any [] =[];
  constructor(private apiService: ApiService) {
  }
  ogOnInit() : void {
    this.apiService.getEntries().subscribe(
      (data) =>{
        this.person = data;
        console.log("data  ", this.person);
      },
      (e)=>{
        this.errMsg = "Error while fetching data";
        console.error();
      }
    )
  }
  addEntry(person: Person) {
    this.apiService.addEntry(person).subscribe((data:any)=>{
      this.person.push(data);
      console.log(person);
      
    })
  }
}
