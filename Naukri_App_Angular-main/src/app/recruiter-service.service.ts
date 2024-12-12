import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {

  public apiUrl = 'http://localhost:8080/recruiter';

  constructor(private http: HttpClient) {}

  registerRecruiter(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register', data, { responseType: 'json' });
  }

  loginRecruiter(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/login', data, { responseType: 'text' as 'json' });
  }
}


// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { StudentLoginComponent } from './student-login/student-login.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecruiterServiceService {

//   public apiUrl = 'http://localhost:8080/recruiter';

//   constructor(private http: HttpClient) {}

//   registerRecruiter(data: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl+'/register', StudentLoginComponent,{responseType:'text' as 'json' });
//   }
// }
