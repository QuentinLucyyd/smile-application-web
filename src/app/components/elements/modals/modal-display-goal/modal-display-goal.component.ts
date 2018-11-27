import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';

@Component({
  selector: 'app-modal-display-goal',
  templateUrl: './modal-display-goal.component.html',
  styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent extends SubPage implements OnInit {

  disabled: Boolean;
  frequencies: String[];
  _close: Boolean;

  constructor(
    private goalsService: GoalsService,
    private usersService: UsersService
  ) { super(); }

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
      name: this.goalsService.activeGoal.name,
      description: this.goalsService.activeGoal.description,
      frequency: this.goalsService.activeGoal.frequency,
      due_date: this.goalsService.activeGoal.due_date,
      state: this.goalsService.activeGoal.state,
      has_checklist: this.goalsService.activeGoal.has_checklist,
      priority: this.goalsService.activeGoal.priority,
      user_id: this.usersService.ActiveUser.id
    }
    const _goal: Goal = new Goal(goal);
    console.log("Saving now...");
    //this.enable();
    this.goalsService.updateGoal(_goal).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    //this.close();
  }

}
