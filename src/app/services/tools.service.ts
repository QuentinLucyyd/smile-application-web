import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { CheckinsService } from './checkins.service';
import { UsersService } from './users.service';

@Injectable({
	providedIn: 'root'
})
export class ToolsService {
	tools: any[] = [];

	constructor(
		private APIService: ApiServiceService,
		private checkInsService: CheckinsService,
		private usersSerivce: UsersService
	) { }

	public getTools() {
		return new Promise((resolve, reject) => {
			this.APIService.getTools().subscribe(result => {
				const DateObject = new Date;
				const date = DateObject.getFullYear() + '-' + (DateObject.getMonth() + 1) + '-' + DateObject.getUTCDate();

				this.checkInsService.getUserDateCheckins(this.usersSerivce.ActiveUser.id, date).subscribe(data => {
					if (data.data.length)
						this.checkInsService.checkinDone = true;
					for(const tool of result.data) {
						this.tools.push(tool);
					}
					//this.filterTools();
					resolve(this.tools);
				}, err => {
					reject(err);
				});
			}, err => {
				reject (err);
			});
		})
	}

	filterTools() {
		for (const tool of this.tools) {
			if (tool.route === 'checkin' && this.checkInsService.checkinDone) {
				this.tools.splice(this.tools.indexOf(tool), 1);
			} else if (tool.name === 'Check out' && !this.checkInsService.checkinDone)
				this.tools.splice(this.tools.indexOf(tool), 1);
		}
	}
}
