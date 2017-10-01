import { Component } from '@angular/core';

@Component({
  selector: 'pageviewer',
  templateUrl: './loginform.component.html',
  styleUrls: [ './loginform.component.css' ]
})

export class LoginformComponent {
	username: String;
	password: String;

	onLoginformSubmit(){
		console.log('123');
		const user = {
			username: this.username,
			password: this.password
		}
	}

}