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
	deleting: Boolean = false;


	constructor(
		public notesService: NotesService,
		public activeModal: NgbActiveModal,
		public usersService: UsersService
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
	
	deleteNote(){
		this.disabled = true;
		this.deleting = true;
		this.notesService.ActiveNote.is_active = false;
		this.notesService.updateUserNote(this.notesService.ActiveNote).subscribe(data => {
			this.success = true;
			this.deleting = false;
			this.activeModal.close('Note deleted Success');
		})
	}

	closeModal(){
		this.disabled = true;
		this.disabledSaveBtn = true;
		this.disabledDeleteBtn = true;
	}

	updateNote(note: Note) {
		this.loading = true;
		this.notesService.updateUserNote(this.notesService.ActiveNote).subscribe(data => {
			if (data.status == 'success') {
				this.disabled = true;
				this.loading = false;
				this.success = true;
				this.resultMessage = 'Note Updated Succesfully';
			}
		})
	}

	
	
}