import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackService } from './track.service';
import { Router } from '@angular/router';


// Define an interface for your ticket data
interface Ticket {
  id: number;
  issueType: string;
  description: string;
  

  status: string;
  statusClass: string; // Class for badge color (e.g., "primary", "warning")
  assignedTo: string;
}

@Component({
  selector: 'app-track-ticket-status',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule],
  templateUrl: './track-ticket-status.component.html',
  styleUrls: ['./track-ticket-status.component.css'],
  providers:[TrackService]
})
export class TrackTicketStatusComponent{
  // tickets: Ticket[] = [];

  // constructor(private trackService: TrackService) {}

  // ngOnInit(): void {
  //   this.trackService.getRaisedTickets().subscribe(
  //     (tickets) => {
  //       this.tickets = tickets;
  //     },
  //     (error) => {
  //       console.error('Error fetching raised tickets:', error);
  //     }
  //   );

  tickArray: any[] = [];
    constructor(private service: TrackService, private router: Router) {
         this.service.getRaisedTickets().subscribe(tick => this.tickArray = tick)
    }

    goToTicketOptionsPage(): void {
      this.router.navigate(['/ticket-options']);
    }
    
    ngOnInit(): void {
      this.service.getRaisedTickets().subscribe(tick => {
        // Sort tickArray based on ticketId in descending order
        this.tickArray = tick.sort((a, b) => b.ticketId - a.ticketId);
      });
    }

        //this.service.getRaisedTickets().subscribe(tick => this.tickArray = tick)
    }
  
  // updateAssignedTo(ticketId: number, assignedTo: string) {
  //   this.trackService.updateAssignedTo(ticketId, assignedTo).subscribe(
  //     () => {
  //       console.log('AssignedTo updated successfully');
  //     },
  //     (error) => {
  //       console.error('Error updating AssignedTo:', error);
  //     }
  //   );
  // }



