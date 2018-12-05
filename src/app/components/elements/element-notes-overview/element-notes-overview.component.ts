import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../elements/modals/modal-add-note/modal-add-note.component';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../models/notes';
import { NotesService } from '../../../services/notes.service';
import { UsersService } from '../../../services/users.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ModalDisplayNoteComponent } from '../../elements/modals/modal-display-note/modal-display-note.component';

@Component({
	selector: 'app-element-notes-overview',
	templateUrl: './element-notes-overview.component.html',
	styleUrls: ['./element-notes-overview.component.scss']
})
export class ElementNotesOverviewComponent implements OnInit {

	constructor(
		private titleService: Title,
		public notesService: NotesService,
		private usersService: UsersService,
		private authService: AuthenticationService,
		public modalService: NgbModal
	) {}

	ngOnInit() {
		this.authService.AuthenticateUser().then(data => {
			this.notesService.getUserNotes(this.usersService.ActiveUser.id);
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
