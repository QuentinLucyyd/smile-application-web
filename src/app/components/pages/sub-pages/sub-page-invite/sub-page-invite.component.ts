import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../../../services/users.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { User } from '../../../../models/user';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
	selector: 'app-sub-page-invite',
	templateUrl: './sub-page-invite.component.html',
	styleUrls: ['./sub-page-invite.component.scss']
})
export class SubPageInviteComponent extends SubPage implements OnInit {
	email: string = 'jhondoe@example.com'
	role: string = 'client';
	emailFailure: Boolean = false;
	emailMessage: String = '';
	checkingUser: Boolean = false;

	constructor(
		private titleService: Title,
		private usersService: UsersService,
		private notificationService: NotificationsService
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
			this.checkingUser = true;
			this.emailFailure = false;
			this.usersService.getUsersSearch(this.email).subscribe(data => {
				console.log(data);
				if (data.data.length) {
					this.emailFailure = true;
					this.checkingUser = false;
					this.emailMessage = 'That email is already in use';
				} else {
					this.emailFailure = false;
					this.checkingUser = false;
				}
			});
		}
	}

	inviteUser() {
		if (!this.emailFailure && this.email != 'jhondoe@example.com') {
			this.loading = true
			const user: User = new User({
				email: this.email,
				role: this.role
			})
			this.usersService.inviteUser(user).subscribe(result => {
				this.loading = false;
				this.success = true;
				this.notificationService.newNotify('info', 'User invited Successfully');
			}, err => {
				this.failure = true;
				this.loading = true;
				this.resultMessage = 'An error has ocurred';
			})
		}
	}
}
