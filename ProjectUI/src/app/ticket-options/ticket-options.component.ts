// ticket-options.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-options',
  templateUrl: './ticket-options.component.html',
  standalone:true,
  styleUrls: ['./ticket-options.component.css']
})
export class TicketOptionsComponent {
  constructor(private router: Router) {}
  // searchQuery: string = '';

  // search(form: any) {
  //   // Handle search logic here
  //   console.log('Search Query:', this.searchQuery);
  //   // Reset the form
  //   form.resetForm();
  // }

  raiseTicket() {
    // Implement logic to navigate to the page for raising a ticket
    this.router.navigate(['/raise-ticket']);
  }

  trackTicketStatus() {
    // Implement logic to navigate to the page for tracking ticket status
    this.router.navigate(['/track-ticket-status']);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}

