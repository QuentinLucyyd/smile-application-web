import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';
import { ToolsService } from '../../../services/tools.service';
import { NavService } from 'src/app/services/nav.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
	selector: 'app-element-sidebar',
	templateUrl: './element-sidebar.component.html',
	styleUrls: ['./element-sidebar.component.scss']
})
export class ElementSidebarComponent extends SubPage implements OnInit {

	constructor(
		private toolsService: ToolsService,
		public navService: NavService,
		public _router: Router,
		public authenticationService: AuthenticationService
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

	openTool(tool) {
		this.navService.MobileMenu = !this.navService.MobileMenu;
		this._router.navigate(['/dashboard/' + tool.route], {queryParams: {reauth: 'true', ref: 'home'}});
	}

}
