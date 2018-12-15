import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { NotesService } from '../../../../services/notes.service';
import { Note } from '../../../../models/notes'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordService } from 'src/app/services/record.service';

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
		public activeModal: NgbActiveModal,
		public recordService: RecordService
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
		if (this.recordService.url) {
			this._notesServices.createUserNote(this.recordService.formData, '?voice=true&title=Recording%20'
			+ new Date() + '&type=' + this.Note.type, true).subscribe(data => {
				this.loading = false;
				this.success = true;
				this._notesServices.Notes.push(this.Note);
				this.activeModal.close('Note Add Success');
			}, err => {
				this.loading = false;
				this.failure = true;
				console.log(err);
				this.resultMessage = 'Something went wrong. Try again';
			})
		} else {
			this._notesServices.createUserNote(this.Note, '?note=true', false).subscribe(data => {
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
}
