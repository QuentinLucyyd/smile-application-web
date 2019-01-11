
export class Checklist {
	id: Number;
	goal_id: Number;
    description: String;
	is_completed: boolean = false;
	last_edit: Date = new Date();
	
	constructor(checklist) {
		this.updateChecklist(checklist);
	}

	updateChecklist(checklist) {
		if ( checklist.id ) { this.id = checklist.id; }
		if ( checklist.goal_id ) { this.goal_id = checklist.goal_id; }
        if ( checklist.description ) { this.description = checklist.description; }
		if ( checklist.is_completed ) { this.is_completed = checklist.is_completed; }
		if ( checklist.last_edit ) { this.last_edit = new Date(checklist.last_edit); }
	}
}