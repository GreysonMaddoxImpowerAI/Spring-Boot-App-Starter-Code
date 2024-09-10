import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  readonly apiEndpoint = '[INSERT BACKEND URL HERE]'
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<any> {
    return this.http.get(this.apiEndpoint).pipe(catchError(this.handleError))
  }
  addNewBook(book: any): Observable<any> {
    console.log('Posting ' + book)
    return this.http.post(this.apiEndpoint, book)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)
    } else {
      console.log(error.status)
    }
    return throwError(new Error('Something is wrong!'));
  };
}