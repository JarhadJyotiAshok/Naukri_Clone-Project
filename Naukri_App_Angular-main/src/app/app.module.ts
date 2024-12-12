import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NaukriFirstComponent } from './naukri-first/naukri-first.component';
import { StudentRegComponent } from './student-login/student-reg/student-reg.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { RecruiterRegComponent } from './recruiter-login/recruiter-reg/recruiter-reg.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { DriveComponent } from './drive/drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentLoginComponent,
  RecruiterLoginComponent,
    StudentDashboardComponent,
    NaukriFirstComponent,
    StudentRegComponent,
    Welcome1Component,
    RecruiterRegComponent,
    RecruiterDashboardComponent,
    DriveComponent,
    ViewDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
