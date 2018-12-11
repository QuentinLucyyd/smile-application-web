import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Note } from '../models/notes';

@Injectable({
	providedIn: 'root'
})
export class NotesService {
	ActiveNote: Note = new Note({});
	Notes: Array<Note> = [];

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
						this.Notes.push(new Note(note));
						resolve(result);
					}
				}, err => {
					reject(err);
				});
			})
		}

	public createUserNote(note: Note){
		return this._APIService.createUserNote(note);
	}

	public updateUserNote(note: Note){
		return this._APIService.updateUserNote(note);
	}
}
