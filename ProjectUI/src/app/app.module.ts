// src/app/app.module.ts
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; 

import { RaiseTicketComponent } from './login/raise-ticket/raise-ticket.component';
import { LoginService } from './login.service';
import { AdminPageComponent } from './login/admin-page/admin-page.component'; 
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './login/raise-ticket/ticket.service';
import { SupportPageComponent } from './login/support-page/support-page.component';
import { SupportService } from './login/support-page/support.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent,RaiseTicketComponent,AdminPageComponent,SupportPageComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule], 
  providers: [LoginService,TicketService,SupportService],
  bootstrap: [AppComponent]
})
export class AppModule {}
