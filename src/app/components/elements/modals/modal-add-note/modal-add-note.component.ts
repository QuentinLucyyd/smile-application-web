import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { NotesService } from '../../../../services/notes.service';
import { Note } from '../../../../models/notes'

@Component({
  selector: 'app-modal-add-note',
  templateUrl: './modal-add-note.component.html',
  styleUrls: ['./modal-add-note.component.scss']
})
export class ModalAddNoteComponent extends SubPage implements OnInit {

  user_id: Number;
	title: String = '';
	note: String = '';
  date: Date;
  type: String = '';
	voice: Boolean = false;

  constructor(
    private usersServices: UsersService,
    private _notesServices: NotesService
  ) { super();}

  ngOnInit() {
  }

  addNote(){
    const note =  {
      title: this.title,
      note: this.note,
      type: this.type,
      voice: this.voice,
      user_id: this.usersServices.ActiveUser.id
    }

    const _note: Note =  new Note(note)
    this._notesServices.createUserNote(_note).subscribe(data => {
      console.log(data);
    })
  }
}
