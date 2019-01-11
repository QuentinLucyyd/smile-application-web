import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { Title } from '@angular/platform-browser';
import { LearningService } from 'src/app/services/learning.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-sub-page-information',
	templateUrl: './sub-page-information.component.html',
	styleUrls: ['./sub-page-information.component.scss']
})
export class SubPageInformationComponent extends SubPage implements OnInit {
	filterString: String = '';

	constructor(
		private titleService: Title,
		public learningService: LearningService,
		public usersService: UsersService
	) { 
		super(); 
	}

	ngOnInit() {
		this.titleService.setTitle('Smile | Learning')
		this.loading = true;
		this.learningService.getLearnings().then(data =>{
			this.loading = false;
		})
		.catch(err => {
			this.loading = false;
			this.failure = true;
			this.subPageMessage = err.message;
		})
	}

	filterItems(event: any) {
		for (const item of this.learningService.Learnings) {
			if (!item.title.toLowerCase().includes(this.filterString.toLowerCase()))
				item.visible$.next(false);
				else
					item.visible$.next(true);
		}
	}
}
