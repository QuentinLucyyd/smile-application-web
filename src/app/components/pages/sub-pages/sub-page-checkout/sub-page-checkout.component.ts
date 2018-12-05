import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { RecordService } from 'src/app/services/record.service';
import { Note } from 'src/app/models/notes';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Checkout } from 'src/app/models/checkout';
import { VoiceService } from 'src/app/services/voice.service';
import { Voice } from 'src/app/models/voice';
import { CheckoutService } from 'src/app/services/checkout.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { CheckinsService } from 'src/app/services/checkins.service';

@Component({
  selector: 'app-sub-page-checkout',
  templateUrl: './sub-page-checkout.component.html',
  styleUrls: ['./sub-page-checkout.component.scss']
})
export class SubPageCheckoutComponent extends SubPage implements OnInit {
	Note: Note = new Note({});
	Chekout: Checkout = new Checkout({});
	checkinloading: Boolean = false;

	constructor(
		private _titleService: Title,
		public recordService: RecordService,
		private usersService: UsersService,
		private authenticationService: AuthenticationService,
		private voicesService: VoiceService,
		private checkoutService: CheckoutService,
		public checkinService: CheckinsService,
		private notificationSerivce: NotificationsService,
		private notesService: NotesService,
		private router: Router
	) { super(); }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check out');
		if (!this.checkinService.checkinDone) {
			this.subPageMessage = 'You have not completed your Check in yet.';
			this.subPageLinkText = "Click here to do your Check in";
			this.subPageLinkRoute = '/dashboard/checkin';
		} else {
		this.authenticationService.AuthenticateUser().then(data => {
			this.Note = new Note({
				title: 'Chekout: ' + this.usersService.ActiveUser.first_name + ' ' + this.usersService.ActiveUser.last_name,
				user_id: this.usersService.ActiveUser.id,
				date: new Date,
				type: 'checkout'
			});
			this.Chekout = new Checkout({
				user_id: this.usersService.ActiveUser.id,
			});
		}).catch(err => {
			this.failure = true;
		});

		this.recordService.url = '';
		this.recordService.formData = null;
	}
	}

	submitCheckout() {
		this.loading = true;
		if (this.recordService.url) {
			this.voicesService.createVoice(this.recordService.formData).subscribe(data => {
				this.Chekout.voice = new Voice({
					id: data.data[0].id
				})
				this.checkoutService.createCheckout(this.Chekout).subscribe(data => {
					this.loading = false;
					this.notificationSerivce.newNotify('info', 'Checkout Completed');
					this.router.navigate(['/dashboard'], {queryParams: {ref: this.router.url, type: 'checkout'}});
				}, err => {
					this.loading = false;
					this.failure = true;
				})
			}, err => {
				this.loading = false;
				this.failure = true;
			})
		} else {
			this.notesService.createUserNote(this.Note).subscribe(data => {
				this.Note.id = data.data[0].id;
				this.Chekout.note = this.Note;
				this.checkoutService.createCheckout(this.Chekout).subscribe(data => {
					this.loading = false;
						this.notificationSerivce.newNotify('info', 'Checkout Completed');
						this.router.navigate(['/dashboard'], {queryParams: {ref: this.router.url, type: 'checkout'}});
				}, err => {
					this.loading = false;
					this.failure = true;
				})
			}, err => {
				this.loading = false;
				this.failure = true;
			})
		}
	}
}
