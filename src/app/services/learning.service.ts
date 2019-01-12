import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Learning } from '../models/learning';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
	Learnings: Array<Learning> = [];

  constructor(
		private APIService: ApiServiceService,
		private domSanitizer: DomSanitizer
  ) { }

  getLearnings() {
		return new Promise((resolve, reject) => {
			this.APIService.getLearnings().subscribe(data => {
				if (data.status == 'success') {
					for (const item of data.data) {
						item.url = this.domSanitizer.bypassSecurityTrustResourceUrl(item.url)
						this.Learnings.push(new Learning(item));
					}
					resolve(data);
				} else {
					reject(data);
				}
			}, err => {
				reject(err);
			})
		})
	}

	createLearning(Item: Learning) {
		return this.APIService.createLearning(Item);
	}

	updateLearning(Item: Learning) {
		return this.APIService.updateLearning(Item);
	}
}
