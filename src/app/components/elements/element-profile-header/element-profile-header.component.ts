import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'app-element-profile-header',
	templateUrl: './element-profile-header.component.html',
	styleUrls: ['./element-profile-header.component.scss']
})
export class ElementProfileHeaderComponent implements OnInit {
	default: String = 'assets/images/default-profile-image.jpg';

	constructor(
		public usersService: UsersService
	) { }

	ngOnInit() {
	}

	loadImage() {
		console.log("Image Loading");
	}
}
