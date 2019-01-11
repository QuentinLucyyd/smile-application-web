import { BehaviorSubject } from "rxjs";

export class Learning {
    visible$: BehaviorSubject<Boolean> = new BehaviorSubject(true);
	id: number = 0;
	title: String = '';
	type: String = '';
    excerpt: String = '';
    url: String = '';
	image: String = '';
	date: Date;

	constructor(learning) {
		this.updateLeaning(learning);
	}

	updateLeaning(learning) {
		if ( learning.id ) { this.id = learning.id; }
		if ( learning.title ) { this.title = learning.title; }
		if ( learning.type ) { this.type = learning.type; }
		if ( learning.excerpt ) { this.excerpt = learning.excerpt; }
		if ( learning.image ) { this.image = learning.image; }
		if ( learning.url ) { this.url = learning.url; }
		if ( learning.date ) { this.date = new Date(learning.date);}
	}
}