import { Component, NgModule } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { AddressbookformComponent } from '../addressbookform/addressbookform.component';
interface Person {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-persondetails',
  standalone: true,  
  imports: [CommonModule,AddressbookformComponent],
  templateUrl: './persondetails.component.html',
  styleUrl: './persondetails.component.scss'
})


export class PersondetailsComponent {
  showForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm;
  }
  entries: any[] = [];
  errMsg: string = '';
  persons: any;
  constructor(private apiService: ApiService) { }
  ngOnInit() : void {
    this.apiService.getEntries().subscribe(
      (data) =>{
        this.persons = data;
        console.log("data  ", this.entries);
        
      },
      (e)=>{
        this.errMsg = "Error while fetching data";
        console.error();
        
      }
    )
  }
  // addEntry(entry: Person) {
  //   this.apiService.addEntry(entry).subscribe((data:any)=>{
  //     this.entries.push(data);
  //     console.log("Data  ",data);
      
  //   })
  // }
  
}