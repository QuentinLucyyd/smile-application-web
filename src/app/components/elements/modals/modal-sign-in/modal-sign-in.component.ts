import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../../classes/abstract/page.class';

@Component({
	selector: 'app-modal-sign-in',
	templateUrl: './modal-sign-in.component.html',
	styleUrls: ['./modal-sign-in.component.scss']
})
export class ModalSignInComponent implements OnInit {
	loading: Boolean = false;

	constructor() {
	}

	ngOnInit() {
	}

	signIn() {
		this.loading = true;
	}
}
