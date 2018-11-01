import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { goal } from '../../../models/goal'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goal1: goal = new goal('goal1', 'goal1 description', new Date());
  goal2: goal = new goal('goal1', 'goal1 description', new Date());
  goal3: goal = new goal('goal1', 'goal1 description', new Date());

  goals = [this.goal1, this.goal2, this.goal3];


  constructor(private titleService: Title) {
   }

  ngOnInit() {
    this.titleService.setTitle('Smile | Goals');
  }

}
