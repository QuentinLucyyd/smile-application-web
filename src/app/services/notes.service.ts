import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Note } from '../models/notes';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class NotesService {
	ActiveNote: Note = new Note({});
	Notes: Array<Note> = [];
	ActiveUser: User;

	constructor(
		private _APIService: ApiServiceService
	) { }

		public getNotes() {
			return this._APIService.getNotes();
		}

		public getUserNotes(user_id) {
			return new Promise((resolve, reject) => {
				this.Notes = [];
				return this._APIService.getUserNotes(user_id).subscribe(result => {
					for (let note of result.data) {
						const _note: Note = new Note(note);
						if (_note.voice) {
							const title = _note.title.split(' ')
							_note.title = title[0] + ' ' + title[1] + ' ' + title[2] + ' ' + title[3] + ' ' + title[4];
						}
						this.Notes.push(_note);
						resolve(result);
					}
				}, err => {
					reject(err);
				});
			})
		}

	public createUserNote(note: any, queryparams: string, voice: Boolean){
		return this._APIService.createUserNote(note, queryparams, voice);
	}

	public updateUserNote(note: Note){
		return this._APIService.updateUserNote(note);
	}
}
