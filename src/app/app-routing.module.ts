import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AllUserComponent } from './components/users/all-user/all-user.component';
import { AddSubjectComponent } from './components/subject/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/subject/all-subject/all-subject.component';
import { TakeAttendenceComponent } from './components/attendence/take-attendence/take-attendence.component';
import { ViewAttendenceComponent } from './components/attendence/view-attendence/view-attendence.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },

  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'add-user',
    component:AddUserComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'all-user',
    component:AllUserComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'add-subject',
    component:AddSubjectComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'view-user/:username',
    component:UserProfileComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'all-subject',
    component:AllSubjectComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'take-attendance',
    component:TakeAttendenceComponent,
    canActivate: [AuthGuard] 
  },

  {
    path:'view-attendance',
    component:ViewAttendenceComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
