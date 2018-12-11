import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ModalEditProfileComponent } from '../modals/modal-edit-profile/modal-edit-profile.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-element-profile-header',
	templateUrl: './element-profile-header.component.html',
	styleUrls: ['./element-profile-header.component.scss']
})
export class ElementProfileHeaderComponent implements OnInit {
	default: String = 'assets/images/default-profile-image.jpg';

	constructor(
		public usersService: UsersService,
		public modalService: NgbModal,
	) { }

	ngOnInit() {
	}

	loadImage() {
		console.log("Image Loading");
	}

	editProfile() {
		this.modalService.open(ModalEditProfileComponent, { windowClass: 'modal-custom-container', centered: true, size: 'lg' });
	}
}
