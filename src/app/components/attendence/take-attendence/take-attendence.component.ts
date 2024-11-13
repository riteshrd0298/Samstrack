import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceRecord } from 'src/app/models/attendance-record';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { Subject } from 'src/app/models/subject';

import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css']
})
export class TakeAttendenceComponent {

  students: Student[] = [];
  role!: string;

  selectedIds: number[] = [];
  selectedFaculty!: string;
  selectedSubject!: number;
  selectedDate!: string;
  selectedTime!: string;
  numberOfStudents!: number;

  facultyUser: User[] = [];
  subjects: Subject[] = [];

  constructor(
    private attendanceService: AttendanceService,
    private subjectService: SubjectService,
    private userService: UserService,
    private router:Router
  ) {}

  getAllSubjects() {
    this.subjectService.allSubjects().subscribe((response) => {
      this.subjects = response;
    });
  }

  getAllFaculty() {
    this.userService.getAllFaculties().subscribe((response) => {
      this.facultyUser = response;
    });
  }

  getAllStudents() {
    this.attendanceService.getAllStudent().subscribe((response) => {
      this.students = response;
    });
  }

  ngOnInit() {
    this.role = String(localStorage.getItem('role'));
    this.getAllStudents();
    this.getAllFaculty();
    this.getAllSubjects();
  }

  onSubjectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSubject = Number(selectElement.value);
  }

  onFacultyChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFaculty = String(selectElement.value);
  }
  onTimeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTime = selectElement.value;
  }

  onDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedDate = inputElement.value;
  }

  submitAttendance() {
    this.selectedIds = this.students
      .filter((student) => student.isSelected)
      .map((student) => student.id);

    this.numberOfStudents = this.selectedIds.length;

    const attendanceRecord: AttendanceRecord = {
      username: this.selectedFaculty,
      subjectId: this.selectedSubject,
      date: this.selectedDate,
      time: this.selectedTime,
      numberOfStudents: this.numberOfStudents,
      studentIds: this.selectedIds,
    };



    this.attendanceService.submitAttendance(attendanceRecord).subscribe((response)=>{
      if(response!=null){
        alert('Attendance Submitted');
      }else{
        alert('Something went wrong');
      }
      this.router.navigate(['view-attendance']);
    });
  }
}
