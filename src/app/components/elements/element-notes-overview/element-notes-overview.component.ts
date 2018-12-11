import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNoteComponent } from '../../elements/modals/modal-add-note/modal-add-note.component';

@Component({
	selector: 'app-element-notes-overview',
	templateUrl: './element-notes-overview.component.html',
	styleUrls: ['./element-notes-overview.component.scss']
})
export class ElementNotesOverviewComponent implements OnInit {

	constructor(
		public modalService: NgbModal
	) { }

	ngOnInit() {
	}

	open() {
		this.modalService.open(ModalAddNoteComponent, {  windowClass: 'modal-custom-container', centered: true });
	}
}
