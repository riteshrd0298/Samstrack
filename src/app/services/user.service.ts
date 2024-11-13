import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8091/user'; // Base API URL

  constructor(private http: HttpClient) {}

  //add-user
  addUser(user:any):Observable <any> {

    const url='http://localhost:8091/user/register-user';
    return this.http.post(url,user);
  }


  getAllUsers(): Observable <any> {
    const url= 'http://localhost:8091/user/get-all-user';
    return this.http.get(url);
  }

  getUserProfile(username: any): Observable<any> {
    const url = `http://localhost:8091/user/get-user-by-username/${username}`;
    return this.http.get(url);
  }

  updateUser(userProfile: any): Observable<any> {
    const url = 'http://localhost:8091/user/update-user';
    return this.http.put(url, userProfile);
  }

  deleteUser(username: any): Observable<any> {
    const url = `http://localhost:8091/user/delete-user-by-username?username=${username}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  
  getAllAdmins(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-admin';
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAllFaculties(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-faculty';
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }


  getAllFaculty():Observable<any>{
    const url='http://localhost:8091/faculty/get-all-faculties';
    return this.http.get(url);

  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
      console.log("client side error");

    } else {
      console.log("client side error");

      // Server-side error
      if (error.status === 0) {
        console.log("client side error  0");

        // Network error
        errorMessage = 'Cannot connect to the server. Please try again later.';
      } else {
        console.log("client side error 500");

        errorMessage = `Server-side error: ${error.status} - ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }



}
