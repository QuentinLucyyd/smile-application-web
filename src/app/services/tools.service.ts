import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class ToolsService {
	tools: any[] = [];

	constructor(
		private APIService: ApiServiceService
	) { }

	public getTools() {
		return new Promise((resolve, reject) => {
			this.APIService.getTools().subscribe(result => {
				for(const tool of result.data) {
					this.tools.push(tool);
				}
				resolve(this.tools);
			}, err => {
				reject ();
			});
		})
	}
}
