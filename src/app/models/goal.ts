
export class Goal {
	id: Number;
	name: String = '';
	description: String = '';
	frequency: String = 'Once-off'
	due_date: String;
	state: String = 'ongoing';
	has_checklist: Boolean = false;
	priority: String = 'High';
	user_id: Number = 0;
	
	constructor(goal) {
		this.updateGoal(goal);
	}

	updateGoal(goal) {
		if ( goal.id ) { this.id = goal.id; }
		if ( goal.name ) { this.name = goal.name; }
		if ( goal.description ) { this.description = goal.description; }
		if ( goal.frequency ) { this.frequency = goal.frequency; }
		if ( goal.due_date ) { this.due_date = goal.due_date; }
		if ( goal.state ) { this.state = goal.state; }
		if ( goal.has_checklist ) { this.has_checklist = goal.has_checklist; }
		if ( goal.priority ) { this.priority = goal.priority; }
		if ( goal.user_id ) { this.user_id = goal.user_id; }
	}
}