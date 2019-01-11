import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../elements/modals/modal-add-note/modal-add-note.component';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../models/notes';
import { NotesService } from '../../../services/notes.service';
import { UsersService } from '../../../services/users.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ModalDisplayNoteComponent } from '../../elements/modals/modal-display-note/modal-display-note.component';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-element-notes-overview',
	templateUrl: './element-notes-overview.component.html',
	styleUrls: ['./element-notes-overview.component.scss']
})
export class ElementNotesOverviewComponent implements OnInit {
	@Input() user: User;
	@Input() admin: Boolean;

	UserID: Number = 0;
	constructor(
		private titleService: Title,
		public notesService: NotesService,
		private usersService: UsersService,
		private authService: AuthenticationService,
		public modalService: NgbModal
	) {}

	ngOnInit() {
		if (this.user)
			this.UserID = this.user.id;
		else
			this.UserID = this.usersService.ActiveUser.id;
		this.authService.AuthenticateUser().then(data => {
			this.notesService.getUserNotes(this.UserID);
		})
	}

	open() {
		this.modalService.open(ModalAddNoteComponent, {  windowClass: 'modal-custom-container', centered: true });
	}

	displayNote(note) {
		this.modalService.open(ModalDisplayNoteComponent, {  windowClass: 'modal-custom-container', centered: true, size: 'lg' });
		this.notesService.ActiveNote = note;
	}
}
