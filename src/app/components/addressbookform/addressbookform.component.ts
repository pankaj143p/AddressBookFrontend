import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface Person {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  id: number;
}

@Component({
  selector: 'app-addressbookform',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './addressbookform.component.html',
  styleUrl: './addressbookform.component.scss',
})
export class AddressbookformComponent {
  faXmark = faCircleXmark;
  errMsg: string = '';
  person: any[] = [];

  constructor(private apiService: ApiService) {}

  @Output() closeEvent = new EventEmitter<void>();

  addEntry(person: Person): void {
    this.apiService.addEntry(person).subscribe(
      (data: Person) => {
        // Immediately update the `person` list with the new person
        console.log('Added person:', data);
        this.closeEvent.emit(); // Emit event to close the form after adding
      },
      (e) => {
        this.errMsg = 'Error while adding data';
        console.error(e);
      }
    );
  }

  handleCloseForm() {
    this.closeEvent.emit(); // Emit the event to close the form
  }
}
