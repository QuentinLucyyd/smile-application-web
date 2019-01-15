import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-element-admin-cards',
  templateUrl: './element-admin-cards.component.html',
  styleUrls: ['./element-admin-cards.component.scss']
})
export class ElementAdminCardsComponent extends SubPage implements OnInit {
  Users: Array<User> = [];
  clients: number = 0;
  admins: number = 0;
  pendings: number = 0;
  companies: Array<String> = [];

  constructor (
    public usersService: UsersService
  ) {
    super();
   }

  ngOnInit() {
    this.loading = true;
    this.usersService.getallUsers().subscribe(data => {
      this.loading = false;
      if (data.status == 'success') {
        console.log(data);
        for (const user of data.data) {
          this.Users.push(new User(user));
        }
        this.countUsers();
      }
    }, err => {
      this.loading = false;
      this.failure = true;
    })
  }

  countUsers() {
    for (const user of this.Users) {
      if (user.company) {
        console.log("Company: ", user.company);
        console.log(this.companies.indexOf(user.company));
        if (this.companies.indexOf(user.company) == -1) {
          this.companies.push(user.company);
        }
      }
      if (user.role == 'client' && user.first_name && user.last_name) {
        this.clients++;
      } else if (user.role == 'admin') {
        this.admins++;
      } else {
        this.pendings++;
      }
    }
  }
}
