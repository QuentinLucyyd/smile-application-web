import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';

@Component({
  selector: 'app-sub-page-user',
  templateUrl: './sub-page-user.component.html',
  styleUrls: ['./sub-page-user.component.scss']
})
export class SubPageUserComponent extends SubPage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
