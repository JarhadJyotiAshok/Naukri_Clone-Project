import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {
  emailOrMobile: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  @Output() loginSuccess = new EventEmitter<void>();
  isLoggedIn: boolean = false;

  
  onLoginSuccess() {
    this.isLoggedIn = true;
  }


  onSubmit() {
    const loginData = {
      email: this.emailOrMobile.includes('@') ? this.emailOrMobile : '',
      mobileNumber: this.emailOrMobile.includes('@') ? '' : this.emailOrMobile,
      password: this.password
    };

    console.log('Login Data:', loginData); // Add this line
    this.http.post(`${AppConfig.apiUrl}/recruiter/login`, loginData,{ responseType: 'text' as 'json' }).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/recruiter-dashboard']);

      },
      (error) => {
        console.error('Login error:', error); // Add this line
        this.errorMessage = error.error?.message || 'Login failed. Please check your credentials.';
      }
    );
  }
}
