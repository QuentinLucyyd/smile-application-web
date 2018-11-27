import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../../../services/users.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { User } from '../../../../models/user';

@Component({
	selector: 'app-sub-page-invite',
	templateUrl: './sub-page-invite.component.html',
	styleUrls: ['./sub-page-invite.component.scss']
})
export class SubPageInviteComponent extends SubPage implements OnInit {
	email: String = 'jhondoe@example.com'
	emailFailure: Boolean = false;
	emailMessage: String = '';

	constructor(
		private titleService: Title,
		private usersService: UsersService,
	) { super(); }

	ngOnInit() {
		this.titleService.setTitle('Smile | Invite');
	}

	validateEmailRegex(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	validateEmail(event: any) {
		if (!this.validateEmailRegex(this.email)) {
			this.emailFailure = true;
			this.emailMessage = 'Please enter a valid email';
		} else {
			this.emailFailure = false;
		}
	}
}
