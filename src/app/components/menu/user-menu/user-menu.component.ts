import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  logout() {
    this.loginService.logout(); // Call the logout method from the LoginService
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
