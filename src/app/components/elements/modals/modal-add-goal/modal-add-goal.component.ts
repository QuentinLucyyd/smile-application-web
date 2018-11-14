import { Component, OnInit } from '@angular/core';
import { createDate } from 'ngx-bootstrap/chronos/create/date-from-array';

@Component({
  selector: 'app-modal-add-goal',
  templateUrl: './modal-add-goal.component.html',
  styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent implements OnInit {

  id: Number = 0;
	name: String = 'hello';
	description: String = '';
	frequency: String = ''
	dueDate: Date;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
	user_id: Number = 0;
  
    constructor() {
    }
  
    ngOnInit() {
    }

    createGoal(){
      console.log(this.name);
    }
}
