import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
  	private router: Router,
  	private uService: UserService,
  	private flashM: FlashMessagesService) { }

  ngOnInit() {
  }

  testButton() {
  	this.uService.getUsers().subscribe(users => {
	  	console.log(users);
  	})
  }

  username: String;
	password: String;
	email: String;
	name: String;

	onRegisterformSubmit(){
		console.log('123');
		const user = {
			username: this.username,
			password: this.password,
			email: this.email,
			name: this.name
		}

		this.uService.registerUser(user).subscribe(data => {
			if(data.success) {
				this.flashM.show('You are registered dood', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/login']);
			} else {
				this.flashM.show('Woops someone made a doo doo', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/register']);
			}
		})
	}

}
