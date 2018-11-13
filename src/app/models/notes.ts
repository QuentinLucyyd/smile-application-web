export class Note {
	id: Number = 0;
	title: String = '';
	note: String = '';
    date: Date;
    type: String = '';
	voice: Boolean = false;
	voice_id: Number;
	
	constructor(note) {
		this.updateNote(note);
	}

	updateNote(note) {
        if ( note.title ) { this.title = note.title; }
        if ( note.note ) { this.note = note.note; }
        if ( note.type ) { this.type = note.type; }
        if ( note.voice ) { this.voice = note.voice; }
        if ( note.voice_id ) { this.voice_id = note.voice_id; }
	}
}