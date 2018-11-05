import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-goal',
  templateUrl: './modal-add-goal.component.html',
  styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent implements OnInit {

    loading: Boolean = false;
  
    constructor() {
    }
  
    ngOnInit() {
    }
  
    signIn() {
      this.loading = true;
    }
}
