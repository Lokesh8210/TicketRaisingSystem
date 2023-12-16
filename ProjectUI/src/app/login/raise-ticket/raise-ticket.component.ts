import { Component } from '@angular/core';
import { TicketService } from './ticket.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-raise-ticket',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule],
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css'],
  providers:[TicketService]
})
export class RaiseTicketComponent {
  IssueType: any;
  EmpId: any;
  description: any;
 // raiseTicketMessage: any;

  constructor( private ticketService: TicketService, private router: Router) {}

  raiseTicket(formData:any)
   {
  const ticketData={
    ticketId:formData.any,
    IssueType: formData.IssueType,
    Description: formData.description,
    TicketRaisedDate: new Date().toISOString(),
    Status:"Active" ,
    AssignedTo:"null",
    EmpId:formData.EmpId

    };

    console.log('Ticket data:', ticketData);
  
    this.ticketService.raiseTicket(ticketData).subscribe(
      (response) => {
        console.log('Ticket raised successfully', response);
        const ticketNumber = response.ticketId; // Update to the actual property name
        alert(`You have raised ticket successfully! Ticket Number:# ${ticketNumber}. You can track the status at track status.`);
        this.router.navigate(['/ticket-options']);
        formData.resetForm();
      },
        //this.raiseTicketMessage = 'You have raised a ticket!';
      (error) => {
        console.error('Failed to raise ticket', error);
        alert('Failed')
       // this.raiseTicketMessage = 'Failed to raise a ticket. Please try again.';
        if (error instanceof HttpErrorResponse) {
          console.log('Server returned:', error.status, error.statusText, error.error);
        }
      }
    );
   // formData.resetForm();
  }

  goToTicketOptionsPage(): void {
    this.router.navigate(['/ticket-options']);
  }
  

  // submitRaiseTicketForm(form: any) {
  //   if (form.valid) {
  //     const ticketData = {
  //       IssueType: this.IssueType,
  //       EmpId: this.EmpId,
  //       Description: this.description,
  //       RaisedTicketDate:new Date(),
  //       AssignedTo:'null',
  //       status:null,
  //       empName: "string",
  //       mailId: "string",
  //       password: "string",
  //       role: "string"
        

  //     };
  //     this.raiseTicket();
  //      form.resetForm();
  //   }
  // }
}
