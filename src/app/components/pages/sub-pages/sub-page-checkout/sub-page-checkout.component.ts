import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-page-checkout',
  templateUrl: './sub-page-checkout.component.html',
  styleUrls: ['./sub-page-checkout.component.scss']
})
export class SubPageCheckoutComponent implements OnInit {

	constructor(
		private _titleService: Title
	) { }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check out');
	}
}
