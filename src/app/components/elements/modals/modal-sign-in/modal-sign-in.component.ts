import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { User } from '../../../../models/user';
import { Router } from "@angular/router";
import { NavService } from '../../../../services/nav.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-sign-in',
	templateUrl: './modal-sign-in.component.html',
	styleUrls: ['./modal-sign-in.component.scss']
})
export class ModalSignInComponent extends SubPage implements OnInit {
	forgotPassword: Boolean = false;
	RecoverUser: User = new User({})

	constructor(
		public authenticationSerive: AuthenticationService,
		public usersServices: UsersService,
		public navService: NavService,
		private router: Router,
		public activeModal: NgbActiveModal
	) {	super(); }

	ngOnInit() {
	}

	validateEmailRegex(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	recoverPassword() {
		this.loading = true;

		if (!this.RecoverUser.email || !this.validateEmailRegex(this.RecoverUser.email)) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all fields are valid and not empty';
		} else {
			this.usersServices.recoverAccount(this.RecoverUser).subscribe(result => {
				if (result.status === 'failure') {
					this.loading = false;
					this.failure = true;
					this.resultMessage = result.message;
				} else {
					this.loading = false;
					this.success = true;
					this.resultMessage = result.message;
				}
			})
		}
	}

	signIn() {
		this.loading = true;

		if (!this.authenticationSerive.identifier || !this.authenticationSerive.password) {
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
						this.activeModal.close('Modal Success');
						this.router.navigate(['dashboard'], {queryParams: {'signin': 'success', 'refresh': 'true'}});
					}, 1000);
				}
			}, err => {
				console.log(err);
				var Error = JSON.parse(err._body);
				this.loading = false;
				this.failure = true;
				this.resultMessage = Error.message;
			});
		}
	}
}
