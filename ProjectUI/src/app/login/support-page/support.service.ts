// support.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ISupport } from './support.model';


@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = 'http://localhost:5157/api/Tickets';
  updatedTicket: any;

  constructor(private httpClient: HttpClient) {}

  getTickets(): Observable<ISupport[]> {
    return this.httpClient.get<ISupport[]>(this.apiUrl);
  }
//   PutRoot(RootId: number, assignTicket: any): Observable<any> {    
//     return this.httpClient.put<any>(`${this.apiUrl}/Routings/${RootId}`, assignTicket);
//   }

assignTicket(ticketId: number, ticketStatus: string): Observable<any> {
    const updateData = {
      // You can customize the data you want to send in the request body
      status: ticketStatus
    };

    return this.httpClient.put<any>(`${this.apiUrl}/${ticketId}`, updateData);
  }
  getTicketsById(ticketId: any): Observable<any> {
    const url = `${this.apiUrl}/${ticketId}`;
    return this.httpClient.get(url);
  }
  updateTicket(updatedTicket: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedTicket.ticketId}`;
    return this.httpClient.put(url, updatedTicket).pipe(
      catchError((error) => {
        console.error('Error updating ticket:', error);
        throw error; // rethrow the error to propagate it to the component
      })
    );
  }
  updateTicketAssign(updatedTicket: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedTicket.ticketId}`;
    return this.httpClient.put(url, updatedTicket).pipe(
      catchError((error) => {
        console.error('Error updating ticket:', error);
        throw error; // rethrow the error to propagate it to the component
      })
    );
  }
  

}
