import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addStudent(student:any):Observable<any>{
    const url="http://localhost:8091/student/add-student";
    return this.http.post(url,student);
  }

  getAllStudents():Observable<any>{
    const url="http://localhost:8091/student/get-all-students";
    return this.http.get(url);

  }

  getStudentProfile(id: any): Observable<any> {
    const url = `http://localhost:8091/student/get-student-by-id/${id}`;
    return this.http.get(url);
  }

  updateStudent(studentProfile: any): Observable<any> {
    const url = 'http://localhost:8091/student/update-student';
    return this.http.put(url, studentProfile);
  }

  deleteStudent(id: any): Observable<any> {
    const url = `http://localhost:8091/student/delete-student/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }


}
