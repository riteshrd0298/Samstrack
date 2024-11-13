import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ShowAllAttendance } from 'src/app/models/show-all-attendance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-attendence',
  templateUrl: './view-attendence.component.html',
  styleUrls: ['./view-attendence.component.css']
})
export class ViewAttendenceComponent {

  role!: string;

  showAllAttendance: ShowAllAttendance[] = [];
  selectedSubject: any;
  subjects: any;
  selectedDate: any;

  constructor(
    private attendanceService: AttendanceService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.subjectService.allSubjects().subscribe((response) => {
      this.subjects = response;
    });

    this.role = String(localStorage.getItem('role'));
    this.attendanceService
      .showAllAttendance()
      .pipe(
        map((response) =>
          response.map((showAllAttendance: any) =>
            this.transformData(showAllAttendance)
          )
        )
      )
      .subscribe((transformedData) => {
        this.showAllAttendance = transformedData;
      });
  }

  searchAttendance() {

    this.attendanceService
      .searchAttendanceByDate_Subject(this.selectedDate, this.selectedSubject)
      .pipe(
        map((response) =>
          response.map((showAllAttendance: any) =>
            this.transformData(showAllAttendance)
          )
        )
      )
      .subscribe((transformedData) => {
        this.showAllAttendance = transformedData;
      });
  }

  private transformData(data: any): ShowAllAttendance {

    return {
      id: data.id,
      username: data.user.username,
      date: data.date,
      time: data.time,
      numberOfStudents: data.numberOfStudents,
      studentNames: data.students.map((student: any) => student.name).sort(),
      subjectName: data.subject.name,
    };
  }
}
