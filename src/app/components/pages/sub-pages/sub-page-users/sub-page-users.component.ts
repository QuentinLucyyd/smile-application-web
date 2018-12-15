import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-sub-page-users',
	templateUrl: './sub-page-users.component.html',
	styleUrls: ['./sub-page-users.component.scss']
})
export class SubPageUsersComponent implements OnInit {

	constructor(
		private titleService: Title,
		private usersService: UsersService
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Users');
	}

}
