// student-login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { AppConfig } from '../app.config'; // Import the config file

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  emailOrMobile: string = '';
  password: string = '';
  errorMessage: string = '';
  currentComponent: string = '';
  isLoggedIn: boolean = false;

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  onLoginSuccess() {
    this.isLoggedIn = true;
  }

  Register() {
    this.router.navigate(['/recruiter-login']);
  }

  onSubmit() {
    console.log('Username:', this.emailOrMobile);
    console.log('Password:', this.password);
    const loginData = {
      emailOrMobile: this.emailOrMobile,
      password: this.password
    };

    // Perform login HTTP request using AppConfig for the URL
    this.http.post(`${AppConfig.apiUrl}/naukri/login`, loginData).subscribe(
      response => {
        console.log('Login successful', response);
        this.authService.setUser(response);
        this.router.navigate(['/student-dashboard']); // Example redirect on success
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
