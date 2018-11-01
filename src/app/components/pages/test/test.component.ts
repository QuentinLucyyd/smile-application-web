import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
  
})
export class TestComponent implements OnInit {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#ff5344',
      to: '#6dff79'
    }
  };
     
   constructor() { 
    
  }

  ngOnInit() {
  }

}
