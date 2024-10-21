import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  error: string | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.loginService.loginUser(this.username, this.password).subscribe(
        (response) => {
          // Redirect based on user role
          if (response.role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (response.role === 'faculty') {
            this.router.navigate(['/user-dashboard']);
          } else {
            this.router.navigate(['']);
          }
          // Store token and role
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          this.error = null; // Reset error
        },
        (error) => {
          // Handle error response
          this.error = "Incorrect details"; // Extract specific error message
          console.error("Login error: ", error);
        }
      );
    }
  }
}
