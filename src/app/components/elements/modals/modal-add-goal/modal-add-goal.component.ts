import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { Goal } from '../../../../models/goal';
import { UsersService } from '../../../../services/users.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
	selector: 'app-modal-add-goal',
	templateUrl: './modal-add-goal.component.html',
	styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {
	dateInput: Boolean = true;
	Goal: Goal = new Goal({ user_id: this.usersService.ActiveUser.id });
	frequencies: String[];
	checklist: Array<String> = [];
	hide: Boolean = true;

	constructor(
		private _goalsService: GoalsService,
		private usersService: UsersService,
		public activeModal: NgbActiveModal,
		private notificationService: NotificationsService
	)
	{ super(); }
	
	ngOnInit() {
		this.frequencies = ["Once-Off","Daily","Weekly","Monthly"]
	}

	createGoal(){
		this.loading = true;
		if (!this.Goal.name || !this.Goal.description) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all fields are filled in and valid';
		} else {
			this._goalsService.createGoal(this.Goal).subscribe(data => {
				this.loading = false;
				this.success = true;
				this._goalsService.Goals.push(this.Goal);
				this.activeModal.close('Goal Added Successfully');
				this.notificationService.newNotify('info', 'Goal "' + this.Goal.name + '" Added Successfully');
			}, err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = 'An error has occurred, Please try again';
			})
		}
	}

	onChange(event: any) {
		if (this.Goal.frequency !== 'Daily')
			this.dateInput = true;
		else
			this.dateInput = false;
	}

	onDateSelect(event: any) {
		console.log(this.Goal.due_date);
	}

	clearFields(){
		this.Goal = new Goal({ user_id: this.usersService.ActiveUser.id });
	}

	addItem(){
		this.checklist.push("");
	}

	disable()
	{
		this.hide = false;
	}
}
