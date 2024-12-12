import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NaukriFirstComponent } from './naukri-first/naukri-first.component';
import { StudentRegComponent } from './student-login/student-reg/student-reg.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { RecruiterRegComponent } from './recruiter-login/recruiter-reg/recruiter-reg.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { DriveComponent } from './drive/drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';

const routes: Routes = [
  { path: '', component: NaukriFirstComponent }, // Default route
  { path: 'welcome', component: WelcomeComponent },
  { path: 'welcome1', component: Welcome1Component },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'app-student-reg', component: StudentRegComponent },
  { path: 'recruiter-login', component: RecruiterLoginComponent },
  { path: 'recruiter-reg', component: RecruiterRegComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'recruiter-dashboard', component: RecruiterDashboardComponent },
  { path: 'drive', component: DriveComponent },
  { path: 'viewdrive', component: ViewDriveComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for unknown paths
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
