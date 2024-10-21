import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  username: any;

  userProfile: any;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getUserProfile(this.username);
  }
  getUserProfile(username: any) {

    this.userService.getUserProfile(username).subscribe((response) => {
      this.userProfile = response;
      console.log(this.userProfile);

    });
  }
  updateUser(){
    this.userService.updateUser(this.userProfile).subscribe((response)=>{
      // this.userProfile=response;
      alert("User Updated Successfully");
      this.router.navigate(['/all-user']);
    });
  }
}
