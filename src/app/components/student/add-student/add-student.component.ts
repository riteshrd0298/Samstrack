import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{


  name:any='';
  email:any='';
  role:any='';

  constructor(private studentService:StudentService, private loginService:LoginService,
                 private router:Router
  ){}

  ngOnInit(): void {
    this.role=this.loginService.getRole();
  }

  addStudent(){
    const student={
      name:this.name,
      email:this.email,
    };

    this.studentService.addStudent(student).subscribe((response)=>{
      console.log(response);
      alert("Student added Successfully");
      this.router.navigate(['/all-student']);
      
    });
  }

}
