import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
	providedIn: 'root'
})
export class NotificationsService {

	constructor(
		private _notiferService: NotifierService
	) { }

	public newNotify(type, message) {
		console.log('HERE');
		this._notiferService.notify(type, message);
	}
	
}
