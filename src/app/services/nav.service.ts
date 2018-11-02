import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class NavService {

	constructor(
		private _router: Router
	) { }

	redirectUser(url, delay, isRef) {
		if (isRef) {
			setTimeout(() => {
				this._router.navigate([url], {
					queryParams: {
						ref: this._router.url
					}
				});
			}, delay);
		} else {
			setTimeout(() => {
				this._router.navigate([url]);
			}, delay);
		}
	}
}
