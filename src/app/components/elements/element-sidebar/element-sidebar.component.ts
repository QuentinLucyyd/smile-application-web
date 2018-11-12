import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';
import { ToolsService } from '../../../services/tools.service';

@Component({
	selector: 'app-element-sidebar',
	templateUrl: './element-sidebar.component.html',
	styleUrls: ['./element-sidebar.component.scss']
})
export class ElementSidebarComponent extends SubPage implements OnInit {

	constructor(
		private toolsService: ToolsService
	) {
		super();
	}

	ngOnInit() {
		if (!this.toolsService.tools.length) {
			this.loading = true;
			this.toolsService.getTools()
			.then(result => {
				this.loading = false;
			}).catch(err => {
				this.loading = false;
				this.failure = true;
			});
		}
	}

}
