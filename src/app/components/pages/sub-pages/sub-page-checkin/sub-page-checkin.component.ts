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

@Component({
  selector: 'app-sub-page-checkin',
  templateUrl: './sub-page-checkin.component.html',
  styleUrls: ['./sub-page-checkin.component.scss']
})

export class SubPageCheckinComponent extends SubPage implements OnInit {
	typing: Boolean = false;
	recording: Boolean = false;
	record: any;
	url: any;
	formData:FormData = new FormData();

	p_energy: number = 50;
	h_connection: number = 50;
	m_focus: number = 50;
	f_connected: number = 50;
	happy: number = 50;
	entry: '';

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
		private _checkinService: CheckinsService,
		private domSanitizer: DomSanitizer,
		private voicesService: VoiceService,
		private usersService: UsersService,
		private authenticationSerivce: AuthenticationService
	) { super(); }

	ngOnInit() {
		this._titleService.setTitle('Smile | Check In');
		this.authenticationSerivce.AuthenticateUser();
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
		// this._checkinService.createCheckin(blob).then(data => {
		// 	console.log(data);
		// });
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
			user_id: this.usersService.ActiveUser.id
		}
		const _Checkin: Checkin = new Checkin(checkin);
		console.log(_Checkin);
		if (this.url) {
			this.voicesService.createVoice(this.formData).subscribe(data => {
				const voice = {id: data.data[0].id};
				_Checkin.voice = new Voice(voice);
				console.log(_Checkin);
				this._checkinService.createCheckin(_Checkin).subscribe(data => {
					this.loading = false;
					this.success = true;
				}, err => {
					this.loading = false;
					this.failure = false;
				})
			}, err => {
				this.loading = false;
				this.failure = true;
			})
		} else {
			this._checkinService.createCheckin(_Checkin).subscribe(data => {
				this.loading = false;
				this.success = true;
			}, err => {
				this.loading = false;
				this.failure = false;
			})
		}
	}

	errorCallback(error) {
		console.log('Can not play audio in your browser');
	}
}
