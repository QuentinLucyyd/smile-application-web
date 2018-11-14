import { Voice } from "./voice";

export class Checkin {
	id: Number = 0;
	date: any;
	physical_energy: 0;
	heart_connection: 0;
	mental_focus: 0;
	greater_whole: 0;
	happiness:0;
	completed: Boolean = false;
	user_id: 0;
	voice: Voice = null;

	constructor(checkin) {
		this.updateGoal(checkin)
	}

	updateGoal(checkin) {
		if (checkin.id) {this.id = checkin.id}
		if (checkin.date) {this.date = checkin.date}
		if (checkin.physical_energy) {this.physical_energy = checkin.physical_energy}
		if (checkin.heart_connection) {this.heart_connection = checkin.heart_connection}
		if (checkin.mental_focus) {this.mental_focus = checkin.mental_focus}
		if (checkin.greater_whole) {this.greater_whole = checkin.greater_whole}
		if (checkin.happiness) {this.happiness = checkin.happiness}
		if (checkin.completed) {this.completed = checkin.completed}
		if (checkin.user_id) {this.user_id = checkin.user_id}
	}
}