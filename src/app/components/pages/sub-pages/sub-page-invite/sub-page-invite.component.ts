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
	Users: Array<User> = [];
	email: String = 'jhondoe@example.com'

	regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
	constructor(
		private titleService: Title,
		private usersService: UsersService,
	) { super(); }

	ngOnInit() {
		this.titleService.setTitle('Smile | Invite');
		this.loading = true;

		this.usersService.getUsers().subscribe(result => {
			this.loading = false;
			for (const user of result.data)
				this.Users.push(new User(user));
			console.log(this.Users);
		})
	}

	validateEmail(event: any) {
		
	}
}
