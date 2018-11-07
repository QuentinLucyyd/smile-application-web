import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';
import { Router } from "@angular/router";

import { VerifyService } from '../../../services/verify.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'app-page-verify',
	templateUrl: './page-verify.component.html',
	styleUrls: ['./page-verify.component.scss']
})

export class PageVerifyComponent extends SubPage implements OnInit {
	Logo:String = 'assets/images/logo-white.png';
	verify_token: String = '';
	match:Boolean = true;
	password_verif:String = '';

	firstName:String = '';
	lastName:String = '';
	username:String = '';
	email: String = '';
	password: String = '';
	verify_password: String = '';

	constructor(
		private _verifyService: VerifyService,
		private _usersService: UsersService,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
		private _router: Router
	) {
		super();
		this.activatedRoute.queryParams.subscribe(params => {
			this.verify_token = params['verify_token'];
		});
	}

	ngOnInit() {
		this.titleService.setTitle('Smile | Account Verification');
		this.loading = true;
		if (this.verify_token) {
			this._verifyService.verifyInviteToken(this.verify_token).subscribe(result => {
				this.loading = false;
				if (result.status === 'failure') {
					this.failure = true;
					this._router.navigate(['/']);
				} else {
					this.email = result.data.email;
				}
			}, err => {
				this._router.navigate(['/']);
			});
		} else
			this._router.navigate(['/']);
	}
	
	hasNumbers(t){
		return /\d/.test(t);
	}

	onKeyPassword(event: any) {
		if (this.verify_password != this.password) {
			this.match = false;
		} else {
			this.match = true;
		}
	}
	
	onKeyPasswordVerification(event: any) {
		if (this.password.length < 8) {
			this.password_verif = 'Password should be at least 8 charecters';
		} else {
			this.password_verif = '';
		}
	}
	
	verifyForm() {
		this.loading = true;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!this.email || !this.firstName || !this.lastName || !this.username ||
			!this.password || !this.verify_password) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that the entire form is filled in and valid';
		} else {
			var body = {
				username: this.username,
				first_name: this.firstName,
				last_name: this.lastName,
				email: this.email,
				password: this.password
			};
			const _User:User = new User(body);
			this._usersService.createAccount(this.verify_token, _User)
			.subscribe(result => {
				this.loading = false;
				console.log(result.status);
				if (result.status === 'success') {
					this.success = true;
					this.resultMessage = 'Account has been verified succesfully created ';
					setTimeout(() => {
						this._router.navigate(['/'], {
							queryParams: {
								ref: this._router.url
							}
						});
					}, 2000);
				}
			}, err => {
				this.loading = false
				this.failure = true
				this.resultMessage = 'An error has occurred';
			})
		}
	}

	resetForm() {
		this.loading = false;
		this.resultMessage = '';
		this.failure = false;
	}
}
