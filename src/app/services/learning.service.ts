import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Learning } from '../models/learning';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
	Learnings: Array<Learning> = [];

  constructor(
    private APIService: ApiServiceService
  ) { }

  getLearnings() {
		return new Promise((resolve, reject) => {
			this.APIService.getLearnings().subscribe(data => {
				if (data.status == 'success') {
					for (const item of data.data) {
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
}
