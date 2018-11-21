export class Note {
	id: any = 0;
	title: String = '';
	note: String = '';
	type: String = '';
	voice: Boolean = false;
	date: Date;
	user_id: number;
	id: number;
	is_active: number;

	constructor(note) {
		this.updateNote(note);
	}

	updateNote(note) {
		if ( note.title ) { this.title = note.title; }
		if ( note.note ) { this.note = note.note; }
		if ( note.type ) { this.type = note.type; }
		if ( note.voice ) { this.voice = note.voice; }
		if ( note.date ) { this.date = note.date;}
		if ( note.user_id) {this.user_id = note.user_id;}
		if ( note.id) {this.id = note.id;}
		if ( note.is_active) {this.is_active = note.is_active;}
	}
}