import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';

@Component({
  selector: 'app-element-admin-archived-users',
  templateUrl: './element-admin-archived-users.component.html',
  styleUrls: ['./element-admin-archived-users.component.scss']
})
export class ElementAdminArchivedUsersComponent extends SubPage implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
