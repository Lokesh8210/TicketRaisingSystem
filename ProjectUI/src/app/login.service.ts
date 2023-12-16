// src/app/login/login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5157/api/Masters';
  private loggedInUser: any;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  getEmployeeIdByEmail(email: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getemployeeid/${email}`);
  }
}
