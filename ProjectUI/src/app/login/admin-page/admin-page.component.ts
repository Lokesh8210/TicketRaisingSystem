import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SupportService } from '../support-page/support.service';
 
interface IAdmin {
  ticketId:any,
  IssueType: any,
    EmpId:any,
    Description: any,
    TicketRaisedDate: any,
    assignedTo: any,
    Status: any,
}


@Component({
  selector: 'app-admin-page',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers:[AdminService]
})
export class AdminPageComponent {


  tickets :any[];
  
  constructor(private router: Router, private Service: AdminService) {
    this.tickets=[];
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.Service.getTickets().subscribe(
      tickets => this.tickets = tickets,
      error => console.error('Error fetching tickets:', error)
    );
  }
  editTicket(ticketId: any): void {
    this.router.navigate(['/update-assignto',ticketId]);
  }
  

  logout(){
    this.router.navigate(['/login']);
  }


  // adminArray: any[] = []
  // constructor(private service: AdminService, private router: Router) {
  //     this.service.getRaisedTickets().subscribe(adr => this.adminArray = adr)
  // }





  // // pageTitle: string = 'Welcome to Admin Page';
  // // logoutButtonLabel: string='Logout';
 
  // // //ticketItems: any[] = [
  // //   // { ticketID: '1', empID: '123', risedDate: '2023-01-01', description: 'Issue 1', assignTo: '' },
  // //   // { ticketID: '2', empID: '456', risedDate: '2023-02-01', description: 'Issue 2', assignTo: '' }
  // //   // // Add more ticket items as needed
  // // //];
 
  // onSubmit(form: any): void {
  //   // Handle form submission logic here
  //   console.log('Form submitted:', form);
  // }
 
  // assignTicket(ticket: any): void {
  //   // Handle ticket assignment logic here
  //   console.log('Assigning ticket:', ticket);
  // }
}