import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttendanceRecord } from '../models/attendance-record';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  getAllStudent(): Observable<any> {
    const url = 'http://localhost:8091/student/get-all-students';
    return this.http.get(url);
  }

  submitAttendance(attendanceRecord: AttendanceRecord): Observable<any> {
    const url = 'http://localhost:8091/attendance/take-attendance';
    return this.http.post(url, attendanceRecord);
  }

  showAllAttendance(): Observable<any[]> {
    const url = 'http://localhost:8091/attendance/get-all-attendance-records';
    return this.http.get<any[]>(url);
  }
  searchAttendanceByDate_Subject(
    date: string,
    subjectId: number
  ): Observable<any> {
    const url = `http://localhost:8091/attendance/get-attendance-by-date-subjet/${date}/${subjectId}`;
    return this.http.get<any[]>(url);
  }
}
