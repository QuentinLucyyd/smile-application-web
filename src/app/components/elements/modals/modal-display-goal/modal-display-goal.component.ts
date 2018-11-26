import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal-display-goal',
  templateUrl: './modal-display-goal.component.html',
  styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent implements OnInit {

  disabled: Boolean;
  frequencies: String[];
  _close: Boolean;

  id: Number;
	name: String = '';
	description: String = '';
	frequency: String = 'Select Frequency:';
	due_date: Date;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
	user_id: Number;


  constructor(
    private goalsService: GoalsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.disabled = true;
    this._close = false;
    this.frequencies = [
			"Once-off",
			"Daily",
			"Weekly",
			"Monthly"
		  ];

  }

  enable(){
    if (this.disabled == true)
    {  this.disabled = false;
      this._close = false;
    }
      else
      {
      this.disabled = true;
      this._close = true;
      }
  }

  close(){
    if (this._close == true)
      this._close = false;
      else
      this._close = true;
  }

  save(){

    const goal = {
      id: this.goalsService.activeGoal.id,
      name: this.name,
      description: this.description,
      frequency: this.frequency,
      due_date: this.due_date,
      state: this.state,
      subgoals: this.subgoals,
      priority: this.priority,
      user_id: this.usersService.ActiveUser.id
    }
    const _goal: Goal = new Goal(goal);
    console.log("Saving now...");
    this.enable();
    this.goalsService.updateGoal(_goal);
    //this.close();
  }

}
