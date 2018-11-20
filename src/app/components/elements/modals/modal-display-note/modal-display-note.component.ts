import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';
import { UsersService } from '../../../../services/users.service';
import { Note } from '../../../../models/notes';
import { LoadedRouterConfig } from '../../../../../../node_modules/@angular/router/src/config';

@Component({
  selector: 'app-modal-display-note',
  templateUrl: './modal-display-note.component.html',
  styleUrls: ['./modal-display-note.component.scss']
})
export class ModalDisplayNoteComponent implements OnInit {

  disabled: Boolean = true;

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
  ) {
  }

  ngOnInit() {
	

  }

  editNote(){
    this.disabled = null;
  }
  
  saveNote(newNote){
    this.disabled = true;
    const note =  {
      title: this.notesService.ActiveNote.title,
      note: newNote,
      type: this.notesService.ActiveNote.type,
      voice: this.notesService.ActiveNote.voice,
      user_id: this.userServices.ActiveUser.id,
      id: this.notesService.ActiveNote.id,
      is_active: this.notesService.ActiveNote.is_active
    }
    const _note: Note =  new Note(note);
    this.notesService.updateUserNote(_note).subscribe(data => {
      console.log(data);
	})
  }

  deleteNote(){
    this.disabled = true;
    const note =  {
      title: this.notesService.ActiveNote.title,
      note: this.notesService.ActiveNote.note,
      type: this.notesService.ActiveNote.type,
      voice: this.notesService.ActiveNote.voice,
      user_id: this.userServices.ActiveUser.id,
      id: this.notesService.ActiveNote.id,
      is_active: 0
    }
    console.log(note);
    const _note: Note =  new Note(note);
    this.notesService.updateUserNote(_note).subscribe(data => {
      console.log(data);
	})
  }

  closeModal(){
	this.disabled = true;
  }

  
}
