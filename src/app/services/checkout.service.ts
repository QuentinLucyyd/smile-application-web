import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Checkout } from '../models/checkout';

@Injectable({
	providedIn: 'root'
})
export class CheckoutService {

	checkinDone: Boolean = false;

	constructor(
		private ApiService: ApiServiceService
	) { }

	public getCheckouts() {
		return this.ApiService.getCheckouts();
	}

	public getUserCheckins(user_id) {
		return this.ApiService.getUserCheckouts(user_id);
	}

	public getUserDateCheckins(user_id, date) {
		return this.ApiService.getUserDateCheckouts(user_id, date);
	}

	public createCheckout(checkout: Checkout) {
		return this.ApiService.createCheckout(checkout);
	}
}
