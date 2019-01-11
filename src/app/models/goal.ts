import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { Checklist } from "./checklist";

export class Goal {
	id: Number;
	name: String = '';
	description: String = '';
	frequency: String = 'Once-off'
	due_date: Date = new Date();
	state: String = 'ongoing';
	has_checklist: Boolean = false;
	priority: String = 'High';
	user_id: Number = 0;
	progress_value: Number = 0;
	is_active: Boolean;

	i: number = 0;
	checklist: Array<Checklist> = [];
	checklist_complete: Boolean = false;
	checklist_loading: Boolean = true;
	
	constructor(goal) {
		this.updateGoal(goal);
		this.checklistProgress();
	}

	updateGoal(goal) {
		if ( goal.id ) { this.id = goal.id; }
		if ( goal.name ) { this.name = goal.name; }
		if ( goal.description ) { this.description = goal.description; }
		if ( goal.frequency ) { this.frequency = goal.frequency; }
		if ( goal.due_date ) { this.due_date = new Date(goal.due_date); }
		if ( goal.state ) { this.state = goal.state; }
		if ( goal.has_checklist ) { this.has_checklist = goal.has_checklist; }
		if ( goal.priority ) { this.priority = goal.priority; }
		if ( goal.user_id ) { this.user_id = goal.user_id; }
		if ( goal.checklist ) { this.checklist = goal.checklist; }
		if ( goal.is_active ) { this.is_active = goal.is_active; }
	}

	populateProgress(checklist) {
		this.checklist = checklist;
		for (let item of checklist ){
			if (item.is_completed == true)
				this.i++;
		}
		this.progress_value = ( this.i / checklist.length) * 100;
		if (this.progress_value == 100)
			this.checklist_complete = true
	}

	checklistProgress() {
		this.i = 0;
		for (let item of this.checklist ){
			if (item.is_completed == true)
				this.i++;
		}
		this.progress_value = ( this.i / this.checklist.length) * 100;
		if (this.progress_value == 100)
			this.checklist_complete = true
		else
			this.checklist_complete = false;
	}
}