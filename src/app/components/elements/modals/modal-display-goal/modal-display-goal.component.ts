import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';

@Component({
  selector: 'app-modal-display-goal',
  templateUrl: './modal-display-goal.component.html',
  styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent implements OnInit {

  disabled: Boolean;
  frequencies: String[];
  _close: Boolean;


  constructor(
    public goalsService: GoalsService
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
    console.log("Saving now...");
    this.enable();
    //this.close();
  }

}
