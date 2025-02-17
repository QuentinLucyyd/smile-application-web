import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CITIES, City } from '../../../../models/country';

@Component({
	selector: 'app-modal-edit-profile',
	templateUrl: './modal-edit-profile.component.html',
	styleUrls: ['./modal-edit-profile.component.scss']
})
export class ModalEditProfileComponent extends SubPage implements OnInit {
	selectedFile: any;
	fileSelected: Boolean = false;
	fileFailure: Boolean = false;
	fileFailureMessage: String = '';
	loadingdisplay: Boolean = false;
	edit: Boolean = false;
	cities: Array<City> = CITIES;

	constructor(
		public activeModal: NgbActiveModal,
		public usersService: UsersService,
		private authenticationService: AuthenticationService
	) { super(); }

	ngOnInit() {
	}

	onFileChanged(event: any) {
		this.selectedFile = event.target.files[0];
		this.fileSelected = true;
		if (this.selectedFile.size > 1048576) {
			this.fileFailure = true;
			this.fileFailureMessage = 'File too Large (required: Less than 1.5MB)';
		} else
			this.fileFailure = false;
	}

 	getBirthDate(date: Date) {
		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		return (date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear());
	}

	updateDisplay() {
		this.loadingdisplay = true;
		if (this.fileSelected) {
			this.fileSelected = !this.fileSelected;
			const FileData: FormData = new FormData();
			const FileName = this.usersService.ActiveUser.username + '-' +
			this.usersService.ActiveUser.id + '-profile-image' + '.' + this.selectedFile.name.split('.')[1];
			FileData.append('profileimage', this.selectedFile, FileName);
			this.usersService.ActiveUser.profileImage = FileData;
			this.usersService.updateUserDisplay(FileData).subscribe(results => {
				this.loadingdisplay = false;
				this.usersService.ActiveUser.profile_image = '';
				setTimeout(()=>{
					this.usersService.ActiveUser.profile_image = results.data.profile_image;
				}, 3000);
			})
		}
	}

	updateProfile() {
		this.loading = true;
		this.usersService.updateUser(this.usersService.ActiveUser).subscribe(data => {
			this.loading = false;
			this.edit = false;
			if (data.status != 'success') {
				this.failure = true;
				this.resultMessage = data.message;
			}
			else {
				this.success = true;
				this.resultMessage = "Profile Updated Succesfully";
			}
		}, err => {
			this.failure = true;
			this.resultMessage = 'Something Went Wront, please try again';
		})
	}
}
