export class Goal {
	name: String = '';
	description: String = '';
	frequency: String = ''
	dueDate: Date;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
	user_id: Number = 0;

	
	constructor(goal) {
		this.updateGoal(goal);
	}

	updateGoal(goal) {
		if ( goal.name ) { this.name = goal.name; }
		if ( goal.description ) { this.description = goal.description; }
		if ( goal.frequency ) { this.frequency = goal.frequency; }
		if ( goal.dueDate ) { this.dueDate = goal.dueDate; }
		if ( goal.state ) { this.state = goal.state; }
		if ( goal.subgoals ) { this.subgoals = goal.subgoals; }
		if ( goal.priority ) { this.priority = goal.priority; }
		if ( goal.user_id ) { this.user_id = goal.user_id; }
	}
}