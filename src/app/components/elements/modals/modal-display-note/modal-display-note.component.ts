import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';

@Component({
  selector: 'app-modal-display-note',
  templateUrl: './modal-display-note.component.html',
  styleUrls: ['./modal-display-note.component.scss']
})
export class ModalDisplayNoteComponent implements OnInit {

  constructor(
    public notesService: NotesService
  ) { }

  ngOnInit() {
  }

}
