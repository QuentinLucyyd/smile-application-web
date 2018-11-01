export class goal {
//as per trello specification
    public name: String = '';
    public description: String = '';
    frequency: String = '' //[onceoff, hourly, daily, weekly, monthly]
    public dueDate: Date;
    state: Boolean = false; //[false=ongoing, true=completed] (not sure of this)
    subgoals: Boolean = false;
    priority: Number; //1=low, 2=medium, 3=high
	constructor(name: String, description: String, dueDate: Date) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
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