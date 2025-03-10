// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   subscribe(_arg0: (data: any) => void) {
//     throw new Error('Method not implemented.');
//   }
//   private apiUrl = "http://localhost:8080/api/addressbook";
//   constructor(private http: HttpClient) { }
//   getEntries() : Observable<any[]> {
//       return this.http.get<any[]>(this.apiUrl);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Person } from '../components/persondetails/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }
  private Url = "http://localhost:8080/api/addressbook"; 
  constructor(private http: HttpClient) {}

  // Fetch the entries from the API
  getEntries(): Observable<any[]> {
    return this.http.get<any[]>(this.Url+'/all');
  }

  // Add a new entry to the API
  addEntry(entry: any): Observable<any> {
    return this.http.post<any>(this.Url+'/add', entry);
  }
 
   
  // delete an entry from the API
  // deleteEntry(id: number): Observable<any> {
  //   return this.http.delete<any>(this.Url + '/delete/' + id);
  // }
  deleteEntry(person: Person) {
    // If the API expects ID to be part of the URL
    return this.http.delete(`http://localhost:8080/api/addressbook/delete/${person.id}`).pipe(
      catchError((err) => {
        console.error('Error deleting data:', err);
        throw err;
      })
    );
  }
  // Update an existing entry in the API by id
  updateEntry(id: number, entry: any): Observable<any> {
    return this.http.put<any>(this.Url + '/update/' + id, entry);
  }
  
}


