import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  users: any[] = []; // Array to hold user data
  role: string = ''; // To determine which navbar to show

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Get role from local storage
    this.role = localStorage.getItem('role') || '';

    // Fetch the user list on component initialization
    this.fetchUsers();
  }

  fetchUsers(): void {
    // Call the service to get the users from the backend
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data; // Store the fetched users in the array
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((response) => {
      alert(response);
      this.fetchUsers();
    });
  }

}