import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';

@Component({
  selector: 'app-modal-display-goal',
  templateUrl: './modal-display-goal.component.html',
  styleUrls: ['./modal-display-goal.component.scss']
})
export class ModalDisplayGoalComponent implements OnInit {

  constructor(
    public goalsService: GoalsService
  ) { }

  ngOnInit() {
  }

}
