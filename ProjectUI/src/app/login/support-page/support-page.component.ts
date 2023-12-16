import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { SupportService } from './support.service';
interface Isupport {
  ticketId:any,
  IssueType: any,
    EmpId:any,
    Description: any,
    TicketRaisedDate: any,
    assignedTo: any,
    Status: any,
}

@Component({
  selector: 'app-support-page',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule],
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.css'],
  providers:[SupportService]
})
export class SupportPageComponent{
  tickets :any[];
  constructor(private router: Router, private Service: SupportService) {
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
    this.router.navigate(['/update-status',ticketId]);
  }

  logout(){
    this.router.navigate(['/login']);
  }
  
  



  // [x: string]: any;

  

  // supArray: any[] = [];
  //   constructor(private service: SupportService, private router: Router) {
  //       this.service.getTickets().subscribe(sup => this.supArray = sup)
  //   }
  //   assignTicket(ticket: Isupport, newStatus: string): void {
  //     console.log('assign ()');
  //     this.service.assignTicket(ticket.ticketId, newStatus).subscribe(
  //       () => {
  //         console.log('Ticket status updated successfully');
  //         // Optionally, reload the ticket items after updating status
  //         this.loadTicketItems();
  //       },
  //       (error) => {
  //         console.error('Error updating ticket status', error);
  //       }
  //     );
  //   }
  //   private loadTicketItems(): void {
  //     this.service.getTickets().subscribe(
  //       (sup) => {
  //         this.supArray = sup;
  //       },
  //       (error) => {
  //         console.error('Error loading ticket items', error);
  //       }
  //     );
  //   }

    // logout(){
    //   this.router.navigate(['/login'])
    // }

    // assignTicket(supArray:any){
    //   const updateData={
    //     // ticketId: this.ticketId,
    //     // issueType: this.

    // }
  
}
  


  