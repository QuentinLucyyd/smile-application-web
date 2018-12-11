import { Voice } from "./voice";
import { Note } from "./notes";

export class Checkout {
	id: Number = 0;
	date: Date;
	user_id: 0;
	voice: Voice = null;
	note: Note = null;

	constructor(checkin) {
		this.updateGoal(checkin)
	}

	updateGoal(checkin) {
		if (checkin.id) {this.id = checkin.id}
		if (checkin.date) {this.date = checkin.date}
		if (checkin.user_id) {this.user_id = checkin.user_id}
	}
}