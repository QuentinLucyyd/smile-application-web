import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { Goal } from '../../../../models/goal';
import { UsersService } from '../../../../services/users.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ChecklistsService } from 'src/app/services/checklists.service';
import { Checklist } from 'src/app/models/checklist';

@Component({
	selector: 'app-modal-add-goal',
	templateUrl: './modal-add-goal.component.html',
	styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {
	dateInput: Boolean = true;
	Goal: Goal = new Goal({ user_id: this.usersService.ActiveUser.id });
	frequencies: String[];
	checklistItem: Checklist = new Checklist({});
	checklist: Array<Checklist> = [];
	checklistView: Boolean = false;
	checklist_placeholder = 'Checklist Item';

	constructor(
		private _goalsService: GoalsService,
		private usersService: UsersService,
		public activeModal: NgbActiveModal,
		private notificationService: NotificationsService,
		private _checklistService: ChecklistsService,
		public _localeService: BsLocaleService
	){ 
		super();
		defineLocale('engb', enGbLocale);
		this._localeService.use('engb');
	}
	
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
				for (var i of this.checklist)
				{
					i.goal_id = data.data[0].id;;
				}
				this._checklistService.createChecklist(this.checklist)
				.subscribe(data => {
					console.log(data);
				});
				this.activeModal.close('Goal Added Successfully');
				this.notificationService.newNotify('info', 'Goal "' + this.Goal.name + '" Added Successfully');
			}, err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = 'An error has occurred, Please try again';
			})
				//this._checklistService.createChecklist(this.checklist).subscribe(data =>{});
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
		this.checklist.push(this.checklistItem);
		this.checklistItem = new Checklist({});
	}

	disable(){
		this.checklistView = true;
	}
}
