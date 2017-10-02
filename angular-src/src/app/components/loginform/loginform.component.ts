import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'pageviewer',
  templateUrl: './loginform.component.html',
  styleUrls: [ './loginform.component.css' ]
})

export class LoginformComponent {
	username: String;
	password: String;

	constructor(
		private userS: UserService,
		private router: Router,
		private flashM: FlashMessagesService) { };

	onLoginformSubmit(){
		console.log('123');
		const user = {
			username: this.username,
			password: this.password
		}

		this.userS.authenticateUser(user).subscribe(data => {
			if(data.success) {
				this.userS.storeUserData(data.token, data.user);
				this.flashM.show('Logged in', {cssClass: 'alert-success', timeout:3000});
				this.router.navigate(['/home']);
			} else {
				this.flashM.show(data.msg, {cssClass: 'alert-danger', timeout:5000});
				this.router.navigate(['/login']);
			}
		})
	}

}