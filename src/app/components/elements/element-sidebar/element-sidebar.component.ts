import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';

@Component({
	selector: 'app-element-sidebar',
	templateUrl: './element-sidebar.component.html',
	styleUrls: ['./element-sidebar.component.scss']
})
export class ElementSidebarComponent extends SubPage implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }

}
