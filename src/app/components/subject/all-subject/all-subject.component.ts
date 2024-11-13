import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {

  name: any;
  sub_List: any;
  showAddSubjectForm = false;

  role: any;

  constructor(
    private userService: UserService,
    private subjectService: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get role from local storage
    this.role = localStorage.getItem('role') || '';

    // Fetch the subject list on component initialization
    this.allSubjects();
  }

  allSubjects() {
    this.subjectService.allSubjects().subscribe((response) => {
      this.sub_List = response;
    });
  }

  // Toggle form display
  toggleAddSubjectForm() {
    this.showAddSubjectForm = !this.showAddSubjectForm;
  }

  // Add new subject
  addSubject() {
    if (this.name) {
      const newSubject = { name: this.name };
      this.subjectService.addSubject(newSubject).subscribe((response) => {
        // After successful addition, refresh the subject list
        this.allSubjects();
        // Clear the form and hide it
        this.name = '';
        this.showAddSubjectForm = false;
      }, (error) => {
        console.error('Error adding subject', error);
      });
    }
  }

  deleteSubject(id:any){
    this.subjectService.deleteSubject(id).subscribe((response) => {
      alert(response);
      this.allSubjects();
    });
  }
}
