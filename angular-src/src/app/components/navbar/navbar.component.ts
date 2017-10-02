import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})

export class NavbarComponent {


	constructor(
		private userS: UserService,
		private router: Router,
		private flashM: FlashMessagesService) { };
	
	onLogoutClick() {
		this.userS.logout();
		this.flashM.show('You are logged out');
		this.router.navigate(['/login']);
		return false;
	}
}