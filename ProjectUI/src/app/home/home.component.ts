import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
 
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
@Component({
 
  selector: 'app-home-component',
  standalone: true,
  imports:[LoginComponent,RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
   // Add this line
})
export class HomeComponent
{
  mouseoverLogin: boolean = false;
  mailId: string = ''; // Declare the mailId property here
  password: string = ''; // Declare the password property here
 
  login(formData: any) {
    // Implement your login logic here
    console.log('Login Form Data:', formData);
}
}