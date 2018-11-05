import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-page-checkin',
  templateUrl: './sub-page-checkin.component.html',
  styleUrls: ['./sub-page-checkin.component.scss']
})
export class SubPageCheckinComponent implements OnInit {
	p_energy: number = 50;
	h_connection: number = 50;
	m_focus: number = 50;
	f_connected: number = 50;
	happy: number = 50;
	options: Options = {
		floor: 0,
		ceil: 100,
		showSelectionBar: true,
		selectionBarGradient: {
			from: '#8fd164',
			to: '#5cb85c'
		}
	};

	constructor(
		private _titleService: Title
	) { }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check In');
	}

}
