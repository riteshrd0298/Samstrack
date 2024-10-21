import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  username:any='';
  email:any='';
  firstName:any='';
  lastName:any='';
  password:any='';
  role:any='';

  constructor(private userService:UserService, private loginService:LoginService,
     private router:Router){}

  ngOnInit(): void {
    this.role = this.loginService.getRole();
  }
  
addUser(){

  const user={
  username:this.username,
  password:this.password,
  firstName:this.firstName,
  lastName:this.lastName,
  email:this.email,
  role:this.role,
  };

  this.userService.addUser(user).subscribe((response)=>{
    // console.log(response);
    alert("User Added Successfully");
    this.router.navigate(['/all-user']);
  });

}
}
