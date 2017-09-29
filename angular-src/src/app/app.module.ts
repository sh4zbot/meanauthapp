import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { PageviewerComponent } from './components/pageviewer/pageviewer.component';
import { QuoteComponent } from './components/quote/quote.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: QuoteComponent },
  { path: 'about',  component: PageviewerComponent },
  { path: 'login',  component: LoginformComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageviewerComponent,
    QuoteComponent,
    LoginformComponent
  ],
  imports: [
  	RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
