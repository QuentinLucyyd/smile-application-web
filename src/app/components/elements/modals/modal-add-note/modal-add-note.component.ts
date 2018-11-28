import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { NotesService } from '../../../../services/notes.service';
import { Note } from '../../../../models/notes'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-add-note',
	templateUrl: './modal-add-note.component.html',
	styleUrls: ['./modal-add-note.component.scss']
})
export class ModalAddNoteComponent extends SubPage implements OnInit {
	noteReady: Boolean = false;
	noteError: String = '';
	charCount: Number = 0;

	Note: Note = new Note({user_id: this.usersServices.ActiveUser.id})

	constructor(
		private usersServices: UsersService,
		private _notesServices: NotesService,
		public activeModal: NgbActiveModal
	) { super();}

	ngOnInit() {
	}

	onChange(event: any) {
		this.charCount = this.Note.note.length;
		if ( this.charCount < 45 ) {
			this.noteError = 'Note has to be more that 45 characters.';
			this.noteReady = false;
		} else {
			this.noteReady = true;
			this.noteError = '';
		}
	}

	addNote(){
		this.loading = true;

		if (!this.Note.title)
			this.Note.title = this.Note.note.split(" ", 4).join(" ") + '...';

		this._notesServices.createUserNote(this.Note).subscribe(data => {
			this.loading = false;
			this.success = true;

			this._notesServices.Notes.push(this.Note);
			this.activeModal.close('Note Add Success');
		}, err => {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Something went wrong. Try again';
		})
	}
}
