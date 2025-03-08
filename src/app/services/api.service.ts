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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }
  private getUrl = "http://localhost:8080/api/addressbook/all"; 
  private postUrl = "http://localhost:8080/api/addressbook/add"; 
  private deleteUrl="http://localhost:8080/api/addressbook/delete"; 
  private putUrl="http://localhost:8080/api/addressbook/update";
  constructor(private http: HttpClient) {}

  // Fetch the entries from the API
  getEntries(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }

  // Add a new entry to the API
  addEntry(entry: any): Observable<any> {
    return this.http.post<any>(this.postUrl, entry);
  }
   
  // delete an entry from the API
  deleteEntry(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteUrl + '/' + id);
  }

  // Update an existing entry in the API by id
  updateEntry(id: number, entry: any): Observable<any> {
    return this.http.put<any>(this.putUrl + '/' + id, entry);
  }
  
}


