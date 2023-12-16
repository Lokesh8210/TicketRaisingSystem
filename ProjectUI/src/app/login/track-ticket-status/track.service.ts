// track.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from './track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private apiUrl = 'http://localhost:5157/api/Tickets';

  constructor(private httpClient: HttpClient) {}

  getRaisedTickets(): Observable<ITicket[]> {
    const sortedUrl = `${this.apiUrl}?_sort=ticketId&_order=desc`;

    return this.httpClient.get<ITicket[]>(sortedUrl);
  }
  // getRaisedTicketsByEmpId(empId: string): Observable<ITicket[]> {
  //   const url = `${this.apiUrl}/GetTicketsByEmpId/${empId}`;
  //   return this.httpClient.get<ITicket[]>(url);
  // }

  // ..=====================
  // updateAssignedTo(ticketId: number, assignedTo: string): Observable<ITicket> {
  //   return this.httpClient.put<ITicket>(`${this.apiUrl}/UpdateAssignedTo/${ticketId}`, `"${assignedTo}"`, {
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  // }
}
