import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketOptionsComponent } from './ticket-options/ticket-options.component';
import { RaiseTicketComponent } from './login/raise-ticket/raise-ticket.component';
import { AdminPageComponent } from './login/admin-page/admin-page.component';
import { SupportPageComponent } from './login/support-page/support-page.component';

//import { HomeComponent } from './home/home.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,LoginComponent,TicketOptionsComponent,RaiseTicketComponent,AdminPageComponent,SupportPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectUI';
}
