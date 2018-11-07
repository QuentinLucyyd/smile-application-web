import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class CheckinsService {

	constructor(
		private ApiService: ApiServiceService
	) { }

	public getCheckIns() {
		return this.ApiService.getCheckins();
	}
}
