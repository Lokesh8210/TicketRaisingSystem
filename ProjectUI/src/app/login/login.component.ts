// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,HttpClientModule],
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  arr: any;
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  email: any = '';

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loginService.getUsers().subscribe(data => {
      console.log(data);
      this.arr = data;
    });
  }
  // getEmpId(formValues.email){
    

  // }

  

  login(formValues: any) {
    console.log('Attempting login:', formValues.email, formValues.password);

    const user = this.arr.find((u: any) => u.mailId === formValues.email && u.password === formValues.password);

    if (user) {
      this.loginService.setLoggedInUser(user);
      if (user.role === 'EndUser') {
        //console.log('Login successful');
        alert(this.errorMessage = 'Login Successful');
        this.router.navigate(['/ticket-options']);
      } else if (user.role === 'Admin') {
        console.log('Login successful');
        alert(this.errorMessage = 'Login Successful');
        this.router.navigate(['/admin-page']);
      }
      if (user.role === 'Support') {
        console.log('Login successful');
        this.router.navigate(['/support-page']);
      }
    } else {
      console.log('Login Failed');
      alert(this.errorMessage = 'Invalid username or password');
    }

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
