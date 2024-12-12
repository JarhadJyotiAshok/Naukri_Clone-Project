import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {
  recruiterForm!: FormGroup; // Use the definite assignment assertion
  username: string = ''; // To store the username
  @Output() logout = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize the recruiter form
    this.recruiterForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      jobTitle: [''],
      skillsRequired: ['']
    });

    // Retrieve user data (if needed)
    const user = this.authService.getUser();
    if (user) {
      this.username = user.username; // Get the username
    } else {
      this.router.navigate(['/recruiter-dashboard']); // Redirect if user not found
    }
  }

  onSubmit(): void {
    if (this.recruiterForm.valid) {
      this.http.post(`${AppConfig.apiUrl}/recruitersDash/register`, this.recruiterForm.value)
        .subscribe(response => {
          console.log('Recruiter registered successfully', response);
          this.router.navigate(['/recruiter-dashboard']);
        }, error => {
          console.error('Error occurred during registration', error);
        });
    }
  }

  onLogout(): void {
    this.authService.clearUser(); // Clear user data
    this.router.navigate(['/']); // Redirect to login page
  }
}
