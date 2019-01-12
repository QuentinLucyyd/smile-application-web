import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { LearningService } from 'src/app/services/learning.service';
import { UsersService } from 'src/app/services/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddInfoComponent } from '../../../elements/modals/modal-add-info/modal-add-info.component';
import { Learning } from 'src/app/models/learning';

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
		public usersService: UsersService,
		public modalService: NgbModal,
	) { 
		super(); 
	}

	ngOnInit() {
		this.titleService.setTitle('Smile | Learning')
		this.loading = true;
		if (!this.learningService.Learnings.length) {
			this.learningService.getLearnings().then(data =>{
				this.loading = false;
			})
			.catch(err => {
				this.loading = false;
				this.failure = true;
				this.subPageMessage = err.message;
			})
		} else
			this.loading = false;
	}

	removeItem(Item: Learning) {
		this.learningService.updateLearning(Item).subscribe(data => {
			console.log(data);
		}, err => {
			var Error = JSON.parse(err._body);
			console.log(Error);
		})
	}

	open() {
		this.modalService.open(ModalAddInfoComponent,{ windowClass: 'modal-custom-container', centered: true });
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
