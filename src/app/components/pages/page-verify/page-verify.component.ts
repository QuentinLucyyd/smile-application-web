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
	form_loading:Boolean = false;

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
				}
			})
		} else
			this._router.navigate(['/']);
	}

	verifyForm() {
		this.loading = true;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!this.email || !this.firstName || !this.lastName || !this.username ||
			!this.password || !this.verify_password) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that the entire form is filled in and valid';
		} else if (!re.test(this.email.toLowerCase())) {
			this.loading = false;
			this.failure = true;
			this.email = '';
			this.resultMessage = 'Invalid Email, please try again';
		} else if (this.password !== this.verify_password) {
			this.loading = false;
			this.failure = true;
			this.password = '';
			this.verify_password = '';
			this.resultMessage = 'Passwords do not match, please try again';
		} else {
			var body = {
				username: this.username,
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				password: this.password
			};
			const _User:User = new User(body);
			this._usersService.createAccount(this.verify_token, _User)
			.subscribe(result => {
				console.log(result);
				if (result.status === 'success') {
					this.success = true;
					this.resultMessage = result.message;
				}
			})
		}
	}

	resetForm() {
		this.loading = false;
		this.resultMessage = '';
		this.failure = false;
	}
}
