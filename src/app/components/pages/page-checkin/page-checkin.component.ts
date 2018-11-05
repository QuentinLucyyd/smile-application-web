import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-page-checkin',
  templateUrl: './page-checkin.component.html',
  styleUrls: ['./page-checkin.component.scss']
})
export class PageCheckinComponent implements OnInit {
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
      from: '#6BBF59',
      to: '#28a745'
    }
  };
     //#EE6352
  constructor() { }

  ngOnInit() {
  }

}
 