import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { PageviewerComponent } from './components/pageviewer/pageviewer.component';
import { QuoteComponent } from './components/quote/quote.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ValidateService} from './services/validate.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: QuoteComponent },
  { path: 'about',  component: PageviewerComponent },
  { path: 'login',  component: LoginformComponent },
  { path: 'register',  component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageviewerComponent,
    QuoteComponent,
    LoginformComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
  	RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [UserService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
