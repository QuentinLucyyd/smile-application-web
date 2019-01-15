import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Note } from '../../../../models/notes';
import { NotesService } from '../../../../services/notes.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../../elements/modals/modal-add-note/modal-add-note.component';
import { ModalDisplayNoteComponent } from '../../../elements/modals/modal-display-note/modal-display-note.component';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sub-page-notes',
  templateUrl: './sub-page-notes.component.html',
  styleUrls: ['./sub-page-notes.component.scss']
})
export class SubPageNotesComponent extends SubPage implements OnInit {
	Notes: Note[] = [];
	editing: Boolean = false;
	username: string;
	User: User;

	constructor(
		private titleService: Title,
		public notesService: NotesService,
		public usersService: UsersService,
		private authService: AuthenticationService,
		public modalService: NgbModal,
		private route: ActivatedRoute
	) {super();}

	ngOnInit() {
		this.username = this.route.snapshot.paramMap.get('id');
		this.titleService.setTitle('Smile | Notes');
		this.loading = true;
		if (!this.username) {
			this.authService.AuthenticateUser().then(data => {
				this.notesService.getUserNotes(this.usersService.ActiveUser.id)
				.then(data => {
					this.loading = false;
					if (!this.notesService.Notes.length) {
						this.subPageMessage = 'You currently have no Notes';
						this.subPageLinkText = 'Click here to add a new note';
					}
				})
				.catch(err => {
					this.loading = false;
					this.failure = true;
					this.subPageMessage = 'An error has occured';
					this.subPageLinkText = 'Please reload and try again';
				});
			}).catch(err => {
				this.loading = false;
				this.subPageMessage = err.message;
			})
		} else {
			this.usersService.getUsersSearch(this.username).subscribe(data => {
				if (data.status == "success") {
					this.User = new User(data.data);
					if (!this.User.first_name && !this.User.last_name) {
						this.loading = false;
						this.failure = true;
						this.subPageMessage = 'User not found';
					} else {
						this.notesService.ActiveUser = this.User;
						this.notesService.getUserNotes(this.User.id)
						.then(data => {
							this.loading = false;
							if (!this.notesService.Notes.length) {
								this.subPageMessage = this.username + ' currently has no Notes';
								this.subPageLinkText = 'Click here to add a new note';
							}
						})
						.catch(err => {
							this.loading = false;
							this.failure = true;
							this.subPageMessage = 'An error has occured';
							this.subPageLinkText = 'Please reload and try again';
						});
					}
				}
			})
		}
	}

	displayNote(note) {
		this.modalService.open(ModalDisplayNoteComponent, {  windowClass: 'modal-custom-container', centered: true, size: 'lg' });
		this.notesService.ActiveNote = note;
	}

	updateNote(note: Note) {
		note.noteLoading = true;
		this.notesService.updateUserNote(note).subscribe(data => {
			note.edit = false;
			note.noteLoading = false;
		})
	}

	open() {
		this.modalService.open(ModalAddNoteComponent, {  windowClass: 'modal-custom-container', centered: true });
	}
}
