import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { Frequency } from 'src/app/models/frequency';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-modal-display-goal',
  templateUrl: './modal-display-goal.component.html',
  styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent implements OnInit {

  disabled: Boolean;


  constructor(
    public goalsService: GoalsService
  ) { }

  ngOnInit() {
    this.disabled = true;

  }

  enable(){
    this.disabled = false;
  }

  save(){
    console.log("Saving now...");
  }

}
