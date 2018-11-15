import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { DatePipe } from '@angular/common';
import { Goal } from '../../../../models/goal';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-modal-add-goal',
  templateUrl: './modal-add-goal.component.html',
  styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {

  id: Number;
	name: String = '';
	description: String = '';
	frequency: String = ''
	dueDate: Date;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
  user_id: Number;

    constructor(
      private _goalsService: GoalsService,
      public datepipe: DatePipe,
      private usersService: UsersService
      )
      { super(); }
  
    ngOnInit() {
      
    }

    createGoal(){
      const goal = {
        id: this.id,
        name: this.name,
        description: this.description,
        frequency: this.frequency,
        dueDate: this.dueDate,
        state: this.state,
        subgoals: this.subgoals,
        priority: this.priority,
        user_id: this.usersService.ActiveUser.id
      }
      const _goal: Goal = new Goal(goal);

      this._goalsService.createGoal(_goal).subscribe(data => {
        console.log(data);
      })
      //this.clearFields();
    }
    clearFields(){
      this.name = '';
      this.description = '';
      //this.dueDate = Date.now;
    }
}
