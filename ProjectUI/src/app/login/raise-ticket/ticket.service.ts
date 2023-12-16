import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IRaise } from './raise.module';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'http://localhost:5157/api/Tickets';

  constructor(private httpClient: HttpClient) {}

  getMasterData(): Observable<IRaise[]> {
    return this.httpClient.get<IRaise[]>(this.apiUrl);
  }

  // raiseTicket(ticketData: any): Observable<IRaise[]>
  //  {
  //   return this.httpClient.post<IRaise[]>(this.apiUrl, ticketData);
  // }
  raiseTicket(ticket:IRaise){
    console.log('inside Post ()');
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post<IRaise>(this.apiUrl, ticket, options)
    .pipe(catchError(this.handleError<IRaise>('raiseTicket')))
  
  }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
