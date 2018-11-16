import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';
import { UsersService } from '../../../../services/users.service';
import { Note } from '../../../../models/notes'

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
  
  constructor(
    public notesService: NotesService,
    private userServices: UsersService
  ) { }

  ngOnInit() {
  }

  editNote(){
    this.disabled = null;
  }
  
  saveNote(){
    this.disabled = true;
    const note =  {
      title: this.title,
      note: this.note,
      type: this.type,
      voice: this.voice,
      user_id: this.userServices.ActiveUser.id
    }

    const _note: Note =  new Note(note)
    this.notesService.updateUserNote(_note).subscribe(data => {
      console.log(data);
    })
  }
}
