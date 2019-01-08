import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Title } from '@angular/platform-browser';
import { CheckinsService } from '../../../../services/checkins.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { DomSanitizer } from '@angular/platform-browser';

import * as RecordRTC from 'recordrtc';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Checkin } from '../../../../models/checkin';
import { VoiceService } from '../../../../services/voice.service';
import { Voice } from '../../../../models/voice';
import { Note } from '../../../../models/notes';
import { NotesService } from '../../../../services/notes.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../services/notifications.service';

@Component({
  selector: 'app-sub-page-checkin',
  templateUrl: './sub-page-checkin.component.html',
  styleUrls: ['./sub-page-checkin.component.scss']
})

export class SubPageCheckinComponent extends SubPage implements OnInit {
	typing: Boolean = false;
	recording: Boolean = false;
	checkinloading: Boolean = false;
	record: any;
	url: any;
	formData:FormData = new FormData();

	p_energy: number = 50;
	h_connection: number = 50;
	m_focus: number = 50;
	f_connected: number = 50;
	happy: number = 50;
	entry: '';
	mood: '';

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
		private _titleService: Title,
		public _checkinService: CheckinsService,
		private domSanitizer: DomSanitizer,
		private voicesService: VoiceService,
		private notesService: NotesService,
		private usersService: UsersService,
		private _router: Router,
		private notificationService: NotificationsService,
		private authenticationSerivce: AuthenticationService
	) { super(); }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check In');
		this.subPageMessage = 'You have completed your checkin for today';
		this.subPageLinkText = 'Click here to do your Checkout.'
		this.subPageLinkRoute = '/checkout';

		this.checkinloading = true;
		this.authenticationSerivce.AuthenticateUser().then(data => {
			const DateObject = new Date;
			const date = DateObject.getFullYear() + '-' + (DateObject.getMonth() + 1) + '-' + DateObject.getUTCDate();
			this._checkinService.getUserDateCheckins(this.usersService.ActiveUser.id, date)
			.subscribe(results => {
				if (results.data.length) {
					this.checkinloading = false;
					this._checkinService.checkinDone = true;
					this.notificationService.newNotify('info', 'You have done your Check in for today');
				} else {
					this.checkinloading = false;
				}
			})
		})
		.catch(err => {
			this.failure = true;
			this.resultMessage = 'An error has occured';
		});
	}

	sanitize(url:string){
		return this.domSanitizer.bypassSecurityTrustUrl(url);
	}

	initiateRecording() {
		this.recording = true;
		let mediaConstraints = {
			video: false,
			audio: true
		};

		navigator.mediaDevices.getUserMedia(mediaConstraints)
		.then(this.successCallback.bind(this), this.errorCallback.bind(this))
	}

	successCallback(stream) {
		var options = {
			mimeType: "audio/wav",
			numberOfAudioChannels: 1
		};

		//Start Actuall Recording
		var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
		this.record = new StereoAudioRecorder(stream, options);
		this.record.record();
	}
	
	stopRecording() {
		this.recording = false;
		this.record.stop(this.processRecording.bind(this));
	}
	
	processRecording(blob) {
		this.formData.append('file', blob, 'temp.wav');
		this.url = URL.createObjectURL(blob);
		this.sanitize(this.url);
	}

	toggleRecording() {
		if (this.recording) {
			this.stopRecording();
		} else {
			this.url = '';
			this.formData = new FormData();
			this.initiateRecording();
		}
	}

	submitCheckin() {
		this.loading = true;
		const checkin = {
			date: new Date,
			physical_energy: this.p_energy,
			heart_connection: this.h_connection,
			mental_focus: this.m_focus,
			greater_whole: this.f_connected,
			happiness: this.happy,
			user_id: this.usersService.ActiveUser.id,
			mood: this.mood
		}
		const _Checkin: Checkin = new Checkin(checkin);
		if (this.url) {
			this.voicesService.createVoice(this.formData).subscribe(data => {
				const voice = {id: data.data[0].id};
				_Checkin.voice = new Voice(voice);
				this._checkinService.createCheckin(_Checkin).subscribe(data => {
					this.loading = false;
					this.notificationService.newNotify('info', 'Checkin Completed');
					this._router.navigate(['/'], {queryParams:{ref: this._router.url, type: 'checkin'}});
				}, err => {
					this.loading = false;
					this.failure = true;
				})
			}, err => {
				this.loading = false;
				this.failure = true;
			})
		} else {
			const note = {
				title: 'Chekin ' + this.usersService.ActiveUser.first_name + this.usersService.ActiveUser.last_name,
				note: this.entry,
				type: 'checkin',
				date: _Checkin.date,
				user_id: this.usersService.ActiveUser.id
			}
			const _Note = new Note(note)
			this.notesService.createUserNote(_Note, '?note=true', false).subscribe(data => {
				_Note.id = data.data.id;
				_Checkin.note = _Note;
				this._checkinService.createCheckin(_Checkin).subscribe(data => {
					this.loading = false;
					this.notificationService.newNotify('info', 'Checkin Completed');
					this._router.navigate(['/'], {queryParams:{ref: this._router.url, type: 'checkin'}});
				}, err => {
					this.loading = false;
					this.failure = false;
				})
			}, err => {
				this.loading = false;
				this.failure = true;
			})
		}
	}

	errorCallback(error) {
		console.log('Can not play audio in your browser');
	}
}
