// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketOptionsComponent } from './ticket-options/ticket-options.component';
import { RaiseTicketComponent } from './login/raise-ticket/raise-ticket.component';
import { TrackTicketStatusComponent } from './login/track-ticket-status/track-ticket-status.component';
import { AdminPageComponent } from './login/admin-page/admin-page.component';
import { SupportPageComponent } from './login/support-page/support-page.component';
import { HomeComponent } from './home/home.component';
import { UpdateStatusComponent } from './login/support-page/update-status/update-status.component';
import { UpdateAssigntoComponent } from './login/admin-page/update-assignto/update-assignto.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'ticket-options', component: TicketOptionsComponent },
  
  {path:'raise-ticket', component:RaiseTicketComponent},
  {path:'track-ticket-status', component:TrackTicketStatusComponent},
  {path:'admin-page',component:AdminPageComponent},
  {path:'support-page',component:SupportPageComponent},
  {path:'home',component:HomeComponent},
  {path:'update-status/:id',component:UpdateStatusComponent},
  {path:'update-assignto/:id',component:UpdateAssigntoComponent}
  // Add other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
