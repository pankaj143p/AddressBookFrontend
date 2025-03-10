import { Component, EventEmitter, Output } from '@angular/core';
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
  imports: [CommonModule, AddressbookformComponent, FontAwesomeModule],
  templateUrl: './persondetails.component.html',
  styleUrl: './persondetails.component.scss',
})
export class PersondetailsComponent {
  trash = faTrash;
  edit = faPenToSquare;
  @Output() closeEvent = new EventEmitter<void>();
  showForm: boolean = false;
  selectedPerson: Person | undefined = undefined;
  errMsg: string = '';
  persons: Person[] = [];
  personMap: Map<number, Person> = new Map();

  constructor(private apiService: ApiService) {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getEntries().subscribe({
      next: (data: Person[]) => {
        this.personMap = new Map(data.map((person) => [person.id, person]));
        this.persons = data; // Ensure `persons` array is updated
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  deleteEntry(person: Person) {
    this.apiService.deleteEntry(person).subscribe({
      next: () => {
        // Immediately update the UI after successful deletion
        this.personMap.delete(person.id);
        this.persons = this.persons.filter((p) => p.id !== person.id); // Remove from persons list too
        console.log('Person deleted:', person);
      },
      error: (err) => {
        console.error('Error deleting person:', err);
      },
    });
  }

  // Add a new person and update the UI directly without a reload
  addEntry(person: Person): void {
    this.apiService.addEntry(person).subscribe(
      (data: Person) => {
        // Update person map and persons list immediately
        this.personMap.set(data.id, data);
        this.persons.push(data); // Add new person to the persons array
        this.showForm = false; // Close the form after adding the person
        console.log('Added person:', data);
      },
      (e) => {
        this.errMsg = 'Error while adding data';
        console.error(e);
      }
    );
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  handleCloseForm() {
    this.showForm = false; // Close the form
  }
}
