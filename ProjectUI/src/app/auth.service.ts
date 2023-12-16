// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: any = null;

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }

  isAuthenticated(): boolean {
    // Check if there is a logged-in user
    return !!this.loggedInUser;
  }

  logout(): void {
    // Clear the logged-in user on logout
    this.loggedInUser = null;
  }
}
