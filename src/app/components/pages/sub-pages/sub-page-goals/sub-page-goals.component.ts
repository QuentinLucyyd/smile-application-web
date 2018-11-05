import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { goal } from '../../../../models/goal'

@Component({
	selector: 'app-sub-page-goals',
	templateUrl: './sub-page-goals.component.html',
	styleUrls: ['./sub-page-goals.component.scss']
})
export class SubPageGoalsComponent implements OnInit {
	goal1: goal = new goal('goal1', 'goal1 description', new Date());
	goal2: goal = new goal('goal1', 'goal1 description', new Date());
	goal3: goal = new goal('goal1', 'goal1 description', new Date());

	goals = [this.goal1, this.goal2, this.goal3];


	constructor(private titleService: Title) {}

	ngOnInit() {
		this.titleService.setTitle('Smile | Goals');
	}
}
