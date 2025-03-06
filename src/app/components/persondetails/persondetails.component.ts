import { Component, NgModule } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './persondetails.component.html',
  styleUrl: './persondetails.component.scss'
})


export class PersondetailsComponent {
  
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
  
}