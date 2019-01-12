import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Learning } from 'src/app/models/learning';
import { LearningService } from 'src/app/services/learning.service';

@Component({
	selector: 'app-modal-add-info',
	templateUrl: './modal-add-info.component.html',
	styleUrls: ['./modal-add-info.component.scss']
})
export class ModalAddInfoComponent extends SubPage implements OnInit {
	InfoItem: Learning = new Learning({});

	constructor(
		public activeModal: NgbActiveModal,
		public learningService: LearningService
	) { 
		super();
	}

	ngOnInit() {
	}

	createInfo() {
		this.loading = true;
		if (this.InfoItem.type == 'video' && (!this.InfoItem.title || !this.InfoItem.url)) {
			this.loading = false;
			this.failure = true;
			if (!this.InfoItem.title)
				this.resultMessage = 'Please enter a Title';
			else if (!this.InfoItem.url)
				this.resultMessage = 'Please enter an Embeded Url'
		} else if (this.InfoItem .type == 'video' && !this.InfoItem.url.includes('youtube')) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that the video link is a YouTube link';
		} else if (this.InfoItem.type == 'article' && (!this.InfoItem.excerpt || !this.InfoItem.image || !this.InfoItem.title || !this.InfoItem.url)) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all the fields are filled in and valid';
		} else {
			if (this.InfoItem.type == 'video') {
				var embedUrl = 'https://www.youtube.com/embed/' + this.getId(this.InfoItem.url);
				this.InfoItem.url = embedUrl
			}
			this.learningService.createLearning(this.InfoItem).subscribe(data => {
				this.loading = false;
				if (data.status == 'success') {
					this.success = true;
					this.resultMessage = 'Info Item Created Succesfully'
				} else {
					this.failure = true;
					this.resultMessage = data.message;
				}
			}, err => {
				this.failure = true;
				this.resultMessage = 'An error has occured, Please try again';
			})
		}
	}

	getId(url) {
		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = url.match(regExp);

		if (match && match[2].length == 11) {
				return match[2];
		} else {
				return 'error';
		}
}
}
