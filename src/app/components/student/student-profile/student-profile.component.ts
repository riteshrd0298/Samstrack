import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit{

  id:any='';
  name:any='';
  email:any=''; 
  role:any='';
  studentProfile:any;

  constructor(private route: ActivatedRoute, private studentService: StudentService,private loginService:LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.role=this.loginService.getRole();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStudentProfile(this.id);
  }

  getStudentProfile(id: any){
    this.studentService.getStudentProfile(id).subscribe((response) => {
      this.studentProfile = response;
      console.log(this.studentProfile);

    });
  }

  updateStudent(){
    this.studentService.updateStudent(this.studentProfile).subscribe((response)=>{
      this.studentProfile=response;
      alert("User Updated Successfully");
      this.router.navigate(['/all-student']);
    });
  }
}
