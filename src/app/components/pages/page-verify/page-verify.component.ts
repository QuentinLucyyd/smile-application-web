import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';

import { VerifyService } from '../../../services/verify.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
	email: String = '';
	password: String = '';
	verify_password: String = '';

	constructor(
		private _verifyService: VerifyService,
		private activatedRoute: ActivatedRoute,
		private titleService: Title
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
			})
		}
	}

	verifyForm() {
		console.log(this.firstName);
		console.log(this.lastName);
		console.log(this.email);
		console.log(this.password);
		console.log(this.verify_password);
	}
}
