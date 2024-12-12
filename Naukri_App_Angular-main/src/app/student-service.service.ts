import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor(private http: HttpClient) {}

  registerRecruiter(data: any): Observable<any> {
    return this.http.post<any>(`${AppConfig.apiUrl}/naukri/reg`, data);
  }
}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentServiceService {


//   public apiUrl = 'http://localhost:8080';

//   constructor(private http: HttpClient) {}

//   registerRecruiter(data: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl+"/naukri/reg", data);
//   }
// }
