import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ChecklistsService } from 'src/app/services/checklists.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
		public goalsService: GoalsService,
		public activeModal: NgbActiveModal,
		private notificationService: NotificationsService,
		public checklistService: ChecklistsService,
		private authService: AuthenticationService

	) { super(); }

	ngOnInit() {
		this.disabled = true;
		this.frequencies = [
			"Once-off",
			"Daily",
			"Weekly",
			"Monthly"
		];
		this.authService.AuthenticateUser().then(data => {
			this.checklistService.Checklist = [];
			this.checklistService.getGoalChecklists(this.goalsService.ActiveGoal.id).then(result => {
				this.loading = false;
				if (!this.goalsService.Goals.length) {
					this.subPageMessage = 'You currently have no goals';
				}
			})
			.catch(err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = "An error has occured";
			})
		})
	}


	save(){
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

}
