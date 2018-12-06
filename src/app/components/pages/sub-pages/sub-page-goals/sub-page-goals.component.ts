import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Goal } from '../../../../models/goal';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddGoalComponent } from '../../../elements/modals/modal-add-goal/modal-add-goal.component';
import { ModalDisplayGoalComponent } from '../../../elements/modals/modal-display-goal/modal-display-goal.component';
import { Options } from 'ng5-slider';
import { ChecklistsService } from 'src/app/services/checklists.service';

@Component({
	selector: 'app-sub-page-goals',
	templateUrl: './sub-page-goals.component.html',
	styleUrls: ['./sub-page-goals.component.scss']
})
export class SubPageGoalsComponent extends SubPage implements OnInit {

	// private progress_value: number = 82;
	options: Options = {
		floor: 0,
		ceil: 100,
		showSelectionBar: true,
		disabled: true
	  };
	  
	constructor(
		private titleService: Title,
		public goalsService: GoalsService,
		public checklistService: ChecklistsService,
		private usersService: UsersService,
		private authService: AuthenticationService,
		public modalService: NgbModal,
	) {super();}

	ngOnInit() {
		this.titleService.setTitle('Smile | Goals');
		this.loading = true;
		this.authService.AuthenticateUser().then(data => {
			this.goalsService.Goals = [];
			this.goalsService.RecurringGoals = [];
			this.goalsService.CompletedGoals = [];
			this.checklistService.UserChecklists = [];
			this.goalsService.getUserGoals(this.usersService.ActiveUser.id).then(result => {
				this.loading = false;
				if (!this.goalsService.Goals.length) {
					this.subPageMessage = 'You currently have no goals';
				} else
					this.populateProgress();
			})
			.catch(err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = "An error has occured";
			})
		});
	}

	populateProgress(){
		for(const goal of this.goalsService.Goals) {
			this.goalsService.getGoalChecklists(goal.id).then(data => {
				goal.populateProgress(data);
			})
		}
		for(const goal of this.goalsService.RecurringGoals) {
			this.goalsService.getGoalChecklists(goal.id).then(data => {
				goal.populateProgress(data);
			})
		}
		for(const goal of this.goalsService.CompletedGoals) {
			this.goalsService.getGoalChecklists(goal.id).then(data => {
				goal.populateProgress(data);
			})
		}
	}

	open() {
		this.modalService.open(ModalAddGoalComponent,{ windowClass: 'modal-custom-container', centered: true });
	}

	setActiveGoal(goal: Goal){
		this.goalsService.ActiveGoal = goal;
		this.modalService.open(ModalDisplayGoalComponent,{ windowClass: 'modal-custom-container', centered: true, size: 'lg' });
	}

	generateValue(){
		console.log("function called");
	}
}
