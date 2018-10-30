import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-element-nav-dashboard',
	templateUrl: './element-nav-dashboard.component.html',
	styleUrls: ['./element-nav-dashboard.component.scss']
})
export class ElementNavDashboardComponent implements OnInit {
	logo: String = 'assets/images/logo-white.png';
	constructor() { }

	ngOnInit() {
	}

}
