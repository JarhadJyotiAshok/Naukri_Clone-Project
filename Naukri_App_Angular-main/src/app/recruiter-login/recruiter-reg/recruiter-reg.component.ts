import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterServiceService } from 'src/app/recruiter-service.service';

@Component({
  selector: 'app-recruiter-reg',
  templateUrl: './recruiter-reg.component.html',
  styleUrls: ['./recruiter-reg.component.css']
})
export class RecruiterRegComponent {
  username: string = '';
  email: string = ''; 
  companyName: string = '';
  mobileNumber: string = '';
  position: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  password: string = '';

  constructor(private recruiterService: RecruiterServiceService, private router: Router) {}

  onSubmit() {
    const recruiterData = { username: this.username, mobileNumber: this.mobileNumber, email: this.email ,position:this.position,companyName:this.companyName};

    this.recruiterService.registerRecruiter(recruiterData).subscribe(
      response => {
        console.log('Data successfully sent to backend:', response);
        this.successMessage = 'Registration successful! Your password is: ' + response.password;
        this.errorMessage = '';
        this.router.navigate(['/recruiter-login']); // Redirect after successful registration
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any) {
    if (error.status === 409) {
      this.errorMessage = error.error; // Adjust based on your API response structure
    } else {
      this.errorMessage = 'An error occurred. Please try again.';
    }
    console.error('Error occurred while submitting form:', error);
  }
}
