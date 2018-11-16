import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';

@Component({
  selector: 'app-modal-display-note',
  templateUrl: './modal-display-note.component.html',
  styleUrls: ['./modal-display-note.component.scss']
})
export class ModalDisplayNoteComponent implements OnInit {

  disabled: Boolean = true;

  constructor(
    public notesService: NotesService
  ) { }

  ngOnInit() {
  }

  editNote(){
    this.disabled = null;
  }
  
  saveNote(){
    this.disabled = true;
  }
}
