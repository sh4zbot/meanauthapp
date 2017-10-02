import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: Object;

  constructor(
		private userS: UserService,
		private router: Router,
		private flashM: FlashMessagesService) { };

  ngOnInit() {
  	this.userS.getProfile().subscribe(profile => {
  		this.user = profile.user;

  	},
  	err => {
  		console.log(err);
  		return false;
  	})
  }

}
