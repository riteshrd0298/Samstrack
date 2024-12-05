import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }


  addSubject(newSubject:any):Observable <any>{
    const url="http://localhost:8091/subject/add-subject";
    return this.http.post(url, newSubject);
  }

  allSubjects():Observable <any>{

    const url='http://localhost:8091/subject/get-all-subjects';
    return this.http.get(url);
  }

  getSubject(id: any): Observable<any> {
    const url = `http://localhost:8091/subject/get-subject-by-id/${id}`;
    return this.http.get(url);
  }

  updateSubject(sub: any): Observable<any> {
    const url = 'http://localhost:8091/subject/update-subject';
    return this.http.put(url, sub);
  }

  deleteSubject(id: any): Observable<any> {
    const url = `http://localhost:8091/subject/delete-subject/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

}
