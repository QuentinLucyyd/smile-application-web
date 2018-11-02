import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-page-checkin',
  templateUrl: './page-checkin.component.html',
  styleUrls: ['./page-checkin.component.scss']
})
export class PageCheckinComponent implements OnInit {
  value: number = 50;
  value1: number = 50;
  value2: number = 50;
  value3: number = 50;
  value4: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#6BBF59',
      to: '#28a745'
    }
  };
     //#EE6352
  constructor() { }

  ngOnInit() {
  }

}
