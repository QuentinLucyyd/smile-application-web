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
import { ChecklistsService } from 'src/app/services/checklists.service';

@Component({
	selector: 'app-sub-page-goals',
	templateUrl: './sub-page-goals.component.html',
	styleUrls: ['./sub-page-goals.component.scss']
})
export class SubPageGoalsComponent extends SubPage implements OnInit {

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
				}
				else{
					this.checklistService.getUserChecklists(this.usersService.ActiveUser.id);
				}
			})
			.catch(err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = "An error has occured";
			})
		})
	}

	open() {
		this.modalService.open(ModalAddGoalComponent,{ windowClass: 'modal-custom-container', centered: true });
	}

	setActiveGoal(goal: Goal){
		this.goalsService.ActiveGoal = goal;
		console.log(this.goalsService.ActiveGoal.id);
		this.modalService.open(ModalDisplayGoalComponent,{ windowClass: 'modal-custom-container', centered: true, size: 'lg' });
	}
}
