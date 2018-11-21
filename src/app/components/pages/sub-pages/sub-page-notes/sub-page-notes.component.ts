import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../../models/notes';
import { NotesService } from '../../../../services/notes.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../../elements/modals/modal-add-note/modal-add-note.component';

@Component({
  selector: 'app-sub-page-notes',
  templateUrl: './sub-page-notes.component.html',
  styleUrls: ['./sub-page-notes.component.scss']
})
export class SubPageNotesComponent extends SubPage implements OnInit {
	Notes: Note[] = [];

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
			console.log(this.usersService.ActiveUser);
			this.notesService.getUserNotes(this.usersService.ActiveUser.id);
		})
	}

	setActiveNote(note) {
		this.notesService.ActiveNote = note;
	}

	open() {
		this.modalService.open(ModalAddNoteComponent, { centered: true });
	}
}
