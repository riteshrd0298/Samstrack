import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {
  id:any='';
  name:any='';
  role:any='';
  subProfile:any;


  constructor(private subjectService:SubjectService, loginService:LoginService,
      private route:ActivatedRoute, private router:Router
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSubject(this.id);
  }

  getSubject(id:any){
    this.subjectService.getSubject(id).subscribe((response) => {
      this.subProfile = response;
      console.log(this.subProfile)
    });
  }



  updateSubject(){
    this.subjectService.updateSubject(this.subProfile).subscribe((response)=>{
      this.subProfile=response;
      alert("User Updated Successfully");
      this.router.navigate(['/all-subject']);
    });
  }
}
