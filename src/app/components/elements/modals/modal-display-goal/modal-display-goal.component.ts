import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Goal } from 'src/app/models/goal';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
		private usersService: UsersService,
		public activeModal: NgbActiveModal
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
		this.loading = true;
		this.goalsService.updateGoal(this.goalsService.ActiveGoal).subscribe(data => {
			this.loading = false;
			this.activeModal.close('Edit Success');
		}, err => {
			console.log(err);
		});
		//this.close();
	}

}
