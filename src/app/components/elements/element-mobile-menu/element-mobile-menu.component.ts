import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import { ToolsService } from '../../../services/tools.service';
import { SubPage } from '../../../classes/abstract/page.class';

@Component({
	selector: 'app-element-mobile-menu',
	templateUrl: './element-mobile-menu.component.html',
	styleUrls: ['./element-mobile-menu.component.scss']
})
export class ElementMobileMenuComponent extends SubPage implements OnInit {
	logo: String = 'assets/images/logo-wide-gradient.png';

	constructor(
		public navService: NavService,
		public toolsService: ToolsService
	) { super(); }

	ngOnInit() {
		this.loading = true;
		if (!this.toolsService.tools) {
			this.toolsService.getTools()
			.then(data => {
				this.loading = false;
			}).catch(err => {
				this.loading = false;
				this.failure = true;
			})
		} else {
			this.loading = false;
		}
	}

}
