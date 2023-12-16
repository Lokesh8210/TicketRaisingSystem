// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import this line
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';



@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], // Add HttpClientModule here
  
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {
    
}
