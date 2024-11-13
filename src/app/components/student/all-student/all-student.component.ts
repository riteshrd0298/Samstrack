import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  name: any = '';
  email: any = '';
  role: any = '';

  student_List: any[] = [];

  constructor(private studentService: StudentService, private loginService: LoginService,
  ) { }
  ngOnInit(): void {
    // Get role from local storage
    this.role = localStorage.getItem('role') || '';

    // Fetch the user list on component initialization
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(
      (response) => {
        this.student_List = response;
      },
      (error) => {
        console.error("Error fetching students:", error);
      }
    );
  }


  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe((response) => {
      alert(response);
      console.log(response);
      this.getAllStudents();
    });
  }

}
