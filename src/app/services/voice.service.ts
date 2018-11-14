import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class VoiceService {

	constructor(
		private APIService: ApiServiceService
	) { }

	public createVoice(formData: FormData) {
		return this.APIService.createVoice(formData);
	}
}
