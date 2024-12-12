import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterServiceService } from 'src/app/recruiter-service.service';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent {
  username: string = '';
  mobileNumber: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private studentServiceService: StudentServiceService,private router:Router) {}
  Login() {
    this.router.navigate(['/student-login']); // Redirect to login page
  }

  onSubmit() {
    const recruiterData = {
      username: this.username,
      mobileNumber: this.mobileNumber,
      email: this.email
    };

    this.studentServiceService.registerRecruiter(recruiterData).subscribe(
      (response: any) => {
        console.log('Data successfully sent to backend:', response);
        
        // Assuming the password is part of the response
        this.successMessage = 'Registration successful! Your password is: ' + response.password;
        this.errorMessage = '';
      },
      error => {
        if (error.status === 409) {
          if (error.error === 'Error: Email already exists') {
            console.error('Error: Email already exists!');
            this.errorMessage = 'Email already exists!';
          } else if (error.error === 'Error: Mobile already exists') {
            console.error('Error: Mobile number already exists!');
            this.errorMessage = 'Mobile number already exists!';
          }
        } else {
          console.error('Error occurred while submitting form:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    );
  }
}
