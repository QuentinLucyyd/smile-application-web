import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../../models/notes';
import { NotesService } from '../../../../services/notes.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../../elements/modals/modal-add-note/modal-add-note.component';
import { ModalDisplayNoteComponent } from '../../../elements/modals/modal-display-note/modal-display-note.component';

@Component({
  selector: 'app-sub-page-notes',
  templateUrl: './sub-page-notes.component.html',
  styleUrls: ['./sub-page-notes.component.scss']
})
export class SubPageNotesComponent extends SubPage implements OnInit {
	Notes: Note[] = [];
	editing: Boolean = false;

	constructor(
		private titleService: Title,
		public notesService: NotesService,
		private usersService: UsersService,
		private authService: AuthenticationService,
		public modalService: NgbModal
	) {super();}

	ngOnInit() {
		this.titleService.setTitle('Smile | Notes');
		this.loading = true;
		this.authService.AuthenticateUser().then(data => {
			this.loading = false;
			this.notesService.getUserNotes(this.usersService.ActiveUser.id);
		})
	}

	displayNote(note) {
		this.modalService.open(ModalDisplayNoteComponent, {  windowClass: 'modal-custom-container', centered: true, size: 'lg' });
		this.notesService.ActiveNote = note;
	}

	updateNote(note: Note) {
		note.noteLoading = true;
		this.notesService.updateUserNote(note).subscribe(data => {
			note.edit = false;
			note.noteLoading = false;
		})
	}

	open() {
		this.modalService.open(ModalAddNoteComponent, {  windowClass: 'modal-custom-container', centered: true });
	}
}
