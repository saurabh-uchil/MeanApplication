import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http : HttpClient) { 
    
  }
  
  getEmployees(){
    return [{eid:'007',ename:'Saurabh',dept:'public website'},
    {eid:'008',ename:'Purvik',dept:'IT Support'},
    {eid:'009',ename:'Pratik',dept:'IT Help Desk'}]
  }

  getPlayers(){
    return this.http.get("http://localhost:3000/allPlayers").pipe(
      catchError(this.getError)
    )

  }

  getError(error: HttpErrorResponse){
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}