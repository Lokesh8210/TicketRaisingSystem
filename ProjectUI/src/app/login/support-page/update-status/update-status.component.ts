import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


interface Ticket {
  ticketId:any,
  issueType: any,
   
    description: any,
    ticketRaisedDate: any,
    status: any,
    assignedTo: any,
    
    empId:any
   
}

@Component({
  selector: 'app-update-status',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule],
  templateUrl: './update-status.component.html',
  styleUrl: './update-status.component.css',
  providers:[SupportService]
})

export class UpdateStatusComponent implements OnInit {

  ticketId: any;
  ticket: Ticket = {} as Ticket; // Initialize an empty product object

  constructor(
    private supportService: SupportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];
      if (this.ticketId) {
        this.getTickets(this.ticketId);
      }
    });
  }

  getTickets(ticketId: any): void {
    this.supportService.getTicketsById(ticketId).subscribe(
      (ticket: Ticket) => {
        this.ticket = ticket; // Assign fetched product to the local 'product' object
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  updateTicket(): void {
    this.supportService.updateTicket({
      ticketId: this.ticketId,
      issueType: this.ticket.issueType,
    empId:this.ticket.empId,
    description: this.ticket.description,
    ticketRaisedDate: this.ticket.ticketRaisedDate,
    assignedTo: this.ticket.assignedTo,
    status: this.ticket.status,
      // Uncomment and add other properties you want to allow editing
    }).subscribe(
      response => {
        console.log('Ticket updated successfully', response);
        alert('Ticket updated successfully');
        this.router.navigate(['/support-page']);
      },
      error => {
        console.error('Error updating ticket:', error);
      }
    );
  }

    // ticketId: any;
    // ticket: Tickets = {} as Tickets; // Initialize an empty product object
  
    // constructor(
    //   private supportService: SupportService,
    //   private router: Router,
    //   private route: ActivatedRoute
    // ) { }
  
    // ngOnInit(): void {
    //   this.route.params.subscribe(params => {
    //     this.ticketId = params['id'];
    //     if (this.ticketId) {
    //       this.fetchProductDetails(this.ticketId);
    //     }
    //   });
    // }
  
    // fetchProductDetails(ticketId: any): void {
    //   this.supportService.getTicketsById(this.ticketId).subscribe(
    //     (ticket: Tickets) => {
    //       this.ticket = ticket; // Assign fetched product to the local 'product' object
    //     },
    //     error => {
    //       console.error('Error fetching product details:', error);
    //     }
    //   );
    // }
  
    // updateTicket(): void {
    //   // Call your ProductService's updateProduct method with only the properties to be updated
    //   this.supportService.updateTicket({
    //     ticketId: this.ticketId,
    //     IssueType: this.ticket.IssueType,
    //     Description:this.ticket.Description,
    //     status:this.ticket.Status,
      
    //     // Add other properties you want to allow editing
    //   }).subscribe(
    //     response => {
    //       console.log('Product updated successfully', response);
    //       alert('Product updated successfully');
    //       this.router.navigate(['/support-page']);
    //     },
    //     error => {
    //       console.error('Error updating product:', error);
    //     }
    //   );
    // }
  
    }
