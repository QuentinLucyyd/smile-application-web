export class Goal {
	id: Number = 0;
	name: String = '';
	description: String = '';
	frequency: String = ''
	dueDate: Date;
	state: Boolean = false;
	subgoals: Boolean = false;
	priority: Number;

	
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
	}
}