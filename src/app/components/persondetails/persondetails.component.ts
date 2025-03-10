import { Component, EventEmitter,  Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { AddressbookformComponent } from '../addressbookform/addressbookform.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
interface Person {
  id: number;
  name: string;
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
  showForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm;
    // this.closeEvent.emit();
  }
  selectedPerson: Person | undefined = undefined;
  errMsg: string = '';
  persons: any[] = [];
  personMap : Map<number, Person> = new Map();

  constructor(private apiService: ApiService) {
    this.fetchData();
   }
  // ngOnInit() : void {
  //   this.apiService.getEntries().subscribe(
  //     (data) =>{
  //       this.persons = data;
  //     },
  //     (e)=>{
  //       this.errMsg = "Error while fetching data";
  //       console.error();
  //     }
  //   )
  // }
  fetchData(){
     this.apiService.getEntries().subscribe({
      next : (data : Person[]) =>{
        this.personMap = new Map(data.map(person => [person.id, person]));
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
     });
    }
    deleteEntry(person: Person) {
      this.apiService.deleteEntry(person).subscribe({
        next: () => {
          // Successfully deleted from the backend, now update the UI
          this.personMap.delete(person.id);
          console.log('Person deleted:', person);
        },
        error: (err) => {
          console.error('Error deleting person:', err);
        }
      });
    }
     
    refresh(): void {
      window.location.reload();
  }

  // deleteEntry(id: number): void {
  //   this.apiService.deleteEntry(id).subscribe(
  //     () => {
  //       this.persons = this.persons.filter((person: any) => person.id !== id);
  //       console.log(this.persons); // Check if the list is updated
  //     },
  //     (error) => {
  //       console.error('Error deleting entry', error);
  //     }
  //   );
  // }


  
  addPerson(person: Person) {
    this.personMap.set(person.id,person);
    this.showForm = false; // Close the form after adding the person
  }
  handleCloseForm() {
    this.showForm = false;  // Close the form
  }
}