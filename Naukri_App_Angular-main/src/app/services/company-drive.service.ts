import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDriveService {

  private apiUrl = 'http://localhost:8080/companydrives';

  constructor(private http: HttpClient) {}

  getCompanyDrives(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
