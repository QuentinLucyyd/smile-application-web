import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { User } from '../../../../models/user';
import { Router } from "@angular/router";
import { NavService } from '../../../../services/nav.service';

@Component({
	selector: 'app-modal-sign-in',
	templateUrl: './modal-sign-in.component.html',
	styleUrls: ['./modal-sign-in.component.scss']
})
export class ModalSignInComponent extends SubPage implements OnInit {

	constructor(
		public authenticationSerive: AuthenticationService,
		public usersServices: UsersService,
		public navService: NavService,
		private router: Router
	) {	super(); }

	ngOnInit() {
	}

	signIn() {
		this.loading = true;

		if (!this.authenticationSerive.identifier || !this.authenticationSerive.identifier) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all fields are valid and not empty';
		} else {
			this.authenticationSerive.userSignin().subscribe(result => {
				if (result.status === 'success') {
					localStorage.setItem('token', result.data.user.signup_token);
					this.usersServices.ActiveUser = new User(result.data.user);
					this.loading = false;
					this.success = true;
					setTimeout(() => {
						this.router.navigate(['dashboard'], {queryParams: {'signin': 'success', 'refresh': 'true'}});
					}, 1000);
				}
			}, err => {
				var Error = JSON.parse(err._body);
				this.loading = false;
				this.failure = true;
				this.resultMessage = Error.message;
			});
		}
	}
}
