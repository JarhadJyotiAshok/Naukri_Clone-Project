import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  setUser(user: any) {
    this.user = user; // Store user data
  }

  getUser() {
    return this.user; // Retrieve user data
  }

  clearUser() {
    this.user = null; // Clear user data on logout
  }
}
