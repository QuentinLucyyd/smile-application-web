import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ChecklistsService } from 'src/app/services/checklists.service';
import { Checklist } from 'src/app/models/checklist';

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
	checklistloading: Boolean = false;
	checklistadd: Boolean = false;
	deleteloading: Boolean = false;
	checklistItem: Checklist = new Checklist({});
	checklist: Array<Checklist> = [];

	constructor(
		public goalsService: GoalsService,
		public activeModal: NgbActiveModal,
		private notificationService: NotificationsService,
		private checklistService: ChecklistsService

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

	checklistChange(item: Checklist) {
		this.checklistService.updateChecklist(item).subscribe(data => {
			this.goalsService.ActiveGoal.checklistProgress();
			if (this.goalsService.ActiveGoal.checklist_complete) {
				this.notificationService.newNotify('info', 'Congratulations on completing the goal ' + this.goalsService.ActiveGoal.name);
			}
		});
		
	}

	addItem() {
		this.checklistItem.goal_id = this.goalsService.ActiveGoal.id;
		this.checklist.push(this.checklistItem);
		this.checklistItem = new Checklist({});
	}

	removeItem(item: Checklist) {
		var index = this.checklist.indexOf(item);
		if (index > -1)
			this.checklist.splice(index, 1);
	}

	submitChecklist() {
		this.checklistloading = true;
		this.checklistService.createChecklist(this.checklist).subscribe(data => {
			for (const item of this.checklist) {
				this.goalsService.ActiveGoal.checklist.push(item);
			}
			this.checklistadd = false;
			this.checklistloading = false;
			console.log(data);
		})
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

	deleteGoal(){
		this.disabled = true;
		this.deleteloading = true;
		this.goalsService.ActiveGoal.is_active = false;
		this.goalsService.updateGoal(this.goalsService.ActiveGoal).subscribe(data => {
			this.success = true;
			this.deleteloading = false;
			this.activeModal.close('Goal deleted Success');
		})
	}

	completeGoal() {
		this.loading = true;
		this.goalsService.ActiveGoal.state = 'completed';
		this.goalsService.ActiveGoal.populateProgress(null);
		this.goalsService.updateGoal(this.goalsService.ActiveGoal).subscribe(data => {
			this.success = true;
			this.deleteloading = false;
			this.activeModal.close('Goal deleted Success');
		})
	}

	incompleteGoal() {
		this.loading = true;
		this.goalsService.ActiveGoal.state = 'ongoing';
		this.goalsService.updateGoal(this.goalsService.ActiveGoal).subscribe(data => {
			this.success = true;
			this.deleteloading = false;
			this.activeModal.close('Goal Marked as Incomplete Success');
		})
	}
}
