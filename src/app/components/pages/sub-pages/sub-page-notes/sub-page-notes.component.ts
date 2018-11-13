import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../../models/notes'
import { NotesService } from '../../../../services/notes.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-sub-page-notes',
  templateUrl: './sub-page-notes.component.html',
  styleUrls: ['./sub-page-notes.component.scss']
})
export class SubPageNotesComponent extends SubPage implements OnInit {
	Notes: Note[] = [];

	constructor(
		private titleService: Title,
		private notesService: NotesService,
		private usersService: UsersService,
		private authService: AuthenticationService
	) {super();}

	ngOnInit() {
		this.titleService.setTitle('Smile | Notes');
		this.loading = true;
		this.authService.AuthenticateUser().then(data => {
			this.loading = false;
			console.log(this.usersService.ActiveUser);
			this.notesService.getUserNotes(this.usersService.ActiveUser.id).subscribe(result => {
				for (let goal of result.data) {
					this.Notes.push(new Note(Note));
				}
			});
		})
	}
}
