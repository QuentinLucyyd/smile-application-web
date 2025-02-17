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
		this._notiferService.notify(type, message);
	}
}
