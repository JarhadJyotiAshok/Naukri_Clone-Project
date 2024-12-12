import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CompanyDrive {
  id: number;
  company: string;
  skillsRequired: string;
  jobTitle: string;
}

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent {

  companyDrives: CompanyDrive[] = [];
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchCompanyDrives();
  }

  fetchCompanyDrives() {
    this.http.get<CompanyDrive[]>('http://localhost:8080/companydrives/getappliedCompany')
      .subscribe((data) => {
        this.companyDrives = data;
      });
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  applyToCompany(drive: any) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile); // File attached

      // POST request to apply with file attached
      alert('Application Submitted successful');
      this.http.post(`http://localhost:8080/companydrives/apply/${drive.id}`, formData)
        .subscribe(response => {
         
          console.log('Application successful', response);
        }, error => {
          console.error('Error in application', error);
        });
    } else {
      alert('Please select a Resume before applying.');
    }
  }

  rejectCompany(drive: any): void {
    alert(`Rejected company: ${drive.company}`);
    this.http.post(`http://localhost:8080/companydrives/reject/${drive.company}`, {})
      .subscribe(response => {
       
        console.log(`Rejected company: ${drive.company}`);
      }, error => {
        console.error('Error rejecting company', error);
      });
  }

}
