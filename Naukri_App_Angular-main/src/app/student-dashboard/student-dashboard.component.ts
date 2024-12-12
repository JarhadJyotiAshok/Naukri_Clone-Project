import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  username: string = ''; // To store the username
  studentForm: FormGroup; // FormGroup for the student form
  @Output() logout = new EventEmitter<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // Initialize the student form
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      education: ['', Validators.required],
      marks10: [''],
      marks12: [''],
      gradmarks: [''],
      graduYear: [''],
      dob: [''],
      skills: [''],
      experience: ['']
    });
  }

  ngOnInit() {
    const username = this.authService.getUser(); // Retrieve user data
    if (username) {
      this.username = username.username; // Get the username
    } else {
      this.router.navigate(['/student-dashboard']); // Redirect if user not found
    }
  }

  onLogout() {
    this.authService.clearUser(); // Clear user data
    this.router.navigate(['/']); // Redirect to login page
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      // this.http.post('http://localhost:8080/studentsDash/register', this.studentForm.value)
      this.http.post(`${AppConfig.apiUrl}/studentsDash/register`, this.studentForm.value)
        .subscribe(response => {
          console.log('Student registered successfully', response);
          // Optionally reset the form or redirect after submission
          this.studentForm.reset(); // Resets the form
        }, error => {
          console.error('Error occurred during registration', error);
        });
    }
  }

  navigateToDrive() {
    this.router.navigate(['/drive']);
  }
}

