import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
	selector: 'app-modal-display-goal',
	templateUrl: './modal-display-goal.component.html',
	styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent extends SubPage implements OnInit {

	disabled: Boolean;
	frequencies: String[];
	disabledDeleteBtn: Boolean = false;
	disabledDeleteIcn: Boolean = true;
	_close: Boolean;

	constructor(
		public goalsService: GoalsService,
		public activeModal: NgbActiveModal,
		private notificationService: NotificationsService
	) { super(); }

	ngOnInit() {
		this.disabled = true;
		this.frequencies = [
			"Once-off",
			"Daily",
			"Weekly",
			"Monthly"
		];
	}


	updateGoal(){
		this.loading = true;
		this.goalsService.updateGoal(this.goalsService.ActiveGoal).subscribe(data => {
			this.loading = false;
			this.activeModal.close('Edit Success');
			this.notificationService.newNotify('info', 'Goal Edited Successfully')
		}, err => {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'An unexpected error has occured, Please try again';
		});
	}
	
	deleteGoal()
 	{
   		this.disabledDeleteBtn = !this.disabledDeleteBtn;
   		// this.disabledEditIcn = !this.disabledEditIcn;
 	}

	_deleteGoal(){
		this.disabled = true;
		const goal =  {
			id: this.goalsService.ActiveGoal.id,
			name: this.goalsService.ActiveGoal.name,
			description: this.goalsService.ActiveGoal.description,
			frequency: this.goalsService.ActiveGoal.frequency,
			due_date: this.goalsService.ActiveGoal.due_date,
			state: this.goalsService.ActiveGoal.state,
			has_checklist: this.goalsService.ActiveGoal.has_checklist,
			priority: this.goalsService.ActiveGoal.priority,
			is_active: 0
			
		}
		const _goal: Goal =  new Goal(goal);
		console.log(_goal);
		this.activeModal.close('Goal deleted Success');
		this.loading = true;
		this.goalsService.updateGoal(_goal).subscribe(data => {
			console.log(data);
	})
	}

}
