import { Component, OnInit, } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';
import { UsersService } from '../../../../services/users.service';
import { Note } from '../../../../models/notes';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubPage } from 'src/app/classes/abstract/page.class';

@Component({
	selector: 'app-modal-display-note',
	templateUrl: './modal-display-note.component.html',
	styleUrls: ['./modal-display-note.component.scss']
})
export class ModalDisplayNoteComponent extends SubPage implements OnInit {
	disabled: Boolean = true;
	disabledSaveBtn: Boolean = true;
	disabledDeleteBtn: Boolean = false;
	disabledDeleteIcn: Boolean = true;

	user_id: Number;
	title: String = '';
	note: String = '';
	date: Date;
	type: String = '';
	voice: Boolean = false;
	id: number;
	isActive: number;
	
	constructor(
		public notesService: NotesService,
		private userServices: UsersService,
		public activeModal: NgbActiveModal
	) { super();}

	ngOnInit() {
	}

	editNote(){
		if (this.disabled == true) {
			this.disabled = null
		}else
			this.disabled = true;
		this.disabledSaveBtn = !this.disabledSaveBtn;
	}
	
	// saveNote(newNote, newNoteType, newNoteTile){
	// 	this.disabled = true;
	// 	this.disabledSaveBtn = true;
	// 	const note =  {
	// 		title: newNoteTile,
	// 		note: newNote,
	// 		type: newNoteType,
	// 		voice: this.notesService.ActiveNote.voice,
	// 		user_id: this.userServices.ActiveUser.id,
	// 		id: this.notesService.ActiveNote.id,
	// 		is_active: this.notesService.ActiveNote.is_active
	// 	}
	// 	const _note: Note =  new Note(note);
	// 	this.activeModal.close('Note deleted Success');
	// 	this.loading = true;
	// 	this.notesService.updateUserNote(_note).subscribe(data => {
	// 		console.log(data);
	// })
	// //location.reload();
	// }



	deleteNote()
 	{
   		this.disabledDeleteBtn = !this.disabledDeleteBtn;
   		this.disabledSaveBtn = false;
 	}

	_deleteNote(){
		console.log(this.notesService.ActiveNote)
		this.disabled = true;
		this.notesService.ActiveNote.is_active = false;
		this.notesService.updateUserNote(this.notesService.ActiveNote).subscribe(data => {
			this.success = true;
			this.activeModal.close('Note deleted Success');
		})
	}

	closeModal(){
		this.disabled = true;
		this.disabledSaveBtn = true;
		this.disabledDeleteBtn = true;
	}

	updateNote(note: Note) {
		note.noteLoading = true;
		this.notesService.updateUserNote(note).subscribe(data => {
			note.edit = false;
			note.noteLoading = false;
		})
	}

	
	
}