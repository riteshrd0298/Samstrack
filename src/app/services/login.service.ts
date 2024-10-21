import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8091/user/login-user';

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password })
      .pipe(
        map((response) => {
          // Assuming the response contains a token
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
          }
          return response;
        }),
        catchError(this.handleError)
      );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  private handleError(httpErrorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (httpErrorResponse.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${httpErrorResponse.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${httpErrorResponse.status} - ${httpErrorResponse.error.message}`;
    }
    return throwError(errorMessage);
  }
}
