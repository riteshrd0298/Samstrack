import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AllUserComponent } from './components/users/all-user/all-user.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
import { UserMenuComponent } from './components/menu/user-menu/user-menu.component';
import { AddSubjectComponent } from './components/subject/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/subject/all-subject/all-subject.component';
import { ViewSubjectComponent } from './components/subject/view-subject/view-subject.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { AllStudentComponent } from './components/student/all-student/all-student.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { TakeAttendenceComponent } from './components/attendence/take-attendence/take-attendence.component';
import { ViewAttendenceComponent } from './components/attendence/view-attendence/view-attendence.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AllUserComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminMenuComponent,
    UserMenuComponent,
    AddSubjectComponent,
    AllSubjectComponent,
    ViewSubjectComponent,
    AddStudentComponent,
    AllStudentComponent,
    StudentProfileComponent,
    TakeAttendenceComponent,
    ViewAttendenceComponent,
    LoginComponent,
    WelcomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
