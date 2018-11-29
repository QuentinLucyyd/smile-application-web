import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { DomSanitizer } from '@angular/platform-browser';

import * as RecordRTC from 'recordrtc';
@Component({
  selector: 'app-sub-page-checkout',
  templateUrl: './sub-page-checkout.component.html',
  styleUrls: ['./sub-page-checkout.component.scss']
})
export class SubPageCheckoutComponent extends SubPage implements OnInit {
	constructor(
		private _titleService: Title,
		private domSanitizer: DomSanitizer,
	) { super(); }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check out');
	}

	submitCheckout() {
		this.loading = true;
	}
}
