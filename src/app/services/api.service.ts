import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Person } from '../components/persondetails/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = "http://localhost:8080/api/addressbook"; 
  
  constructor(private http: HttpClient) {}

  // Fetch the entries from the API
  getEntries(): Observable<Person[]> {
    return this.http.get<Person[]>(this.Url + '/all');
  }

  // Add a new entry to the API
  addEntry(entry: Person): Observable<Person> {
    return this.http.post<Person>(this.Url + '/add', entry);
  }

  // Delete an entry from the API
  deleteEntry(person: Person): Observable<void> {
    return this.http.delete<void>(`${this.Url}/delete/${person.id}`).pipe(
      catchError((err) => {
        console.error('Error deleting data:', err);
        throw err;
      })
    );
  }

  // Update an existing entry in the API by id
  updateEntry(id: number, entry: Person): Observable<Person> {
    return this.http.put<Person>(`${this.Url}/update/${id}`, entry);
  }
}
