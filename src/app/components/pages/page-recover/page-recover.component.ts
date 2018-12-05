import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { VerifyService } from 'src/app/services/verify.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-page-recover',
	templateUrl: './page-recover.component.html',
	styleUrls: ['./page-recover.component.scss']
})
export class PageRecoverComponent extends SubPage implements OnInit {
	Logo:String = 'assets/images/logo-white.png';
	match:Boolean = true;
	password_verif:String = '';
	recover_token: String = '';
	User: User = new User({})
	
	password: String = '';
	verify_password: String = '';

	constructor(
		private titleService: Title,
		private _router: Router,
		private _verifyService: VerifyService,
		private activatedRoute: ActivatedRoute,
		private usersService: UsersService
	) {
		super();
		this.activatedRoute.queryParams.subscribe(params => {
			this.recover_token = params['recover_token'];
		});
	}

	ngOnInit() {
		this.titleService.setTitle('Smile | Account Recovery');
		this.loading = true;
		if (this.recover_token) {
			this._verifyService.verifyInviteToken(this.recover_token).subscribe(result => {
				this.loading = false;
				if (result.status === 'failure') {
					this.failure = true;
					this._router.navigate(['/']);
				}
			}, err => {
				this._router.navigate(['/']);
			});
		} else
			this._router.navigate(['/']);
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

	recoverUser() {
		this.loading = true;
		if (!this.password || !this.verify_password || !this.match) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all fields are filled in.';
		} else {
			this.User = new User({password: this.password});
			this.usersService.recoverUser(this.recover_token, this.User)
			.subscribe(result => {
				if (result.status === 'success') {
					this.loading = false;
					this.success = true;
					this.resultMessage = result.message;
				}
			}, err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = 'An error has occurred';
			})
		}
	}
}
