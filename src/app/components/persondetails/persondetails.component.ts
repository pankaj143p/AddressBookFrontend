import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { AddressbookformComponent } from '../addressbookform/addressbookform.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
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
  imports: [CommonModule, AddressbookformComponent,FontAwesomeModule],
  templateUrl: './persondetails.component.html',
  styleUrl: './persondetails.component.scss'
})


export class PersondetailsComponent {
  trash = faTrash;
  edit = faPenToSquare;
  @Output() closeEvent = new EventEmitter<void>();
    
      // close() {
       
      // }
  showForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm;
    // this.closeEvent.emit();
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
  handleCloseForm() {
    this.showForm = false;  // Close the form
  }
}