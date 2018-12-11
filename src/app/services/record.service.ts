import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';

@Injectable({
	providedIn: 'root'
})
export class RecordService {
	recording: Boolean = false;
	record: any;
	url: any;
	formData:FormData = new FormData();

	constructor(private domSanitizer: DomSanitizer) { }

	sanitize(){
		return this.domSanitizer.bypassSecurityTrustUrl(this.url);
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

	errorCallback(error) {
		console.log('Can not play audio in your browser');
	}

	stopRecording() {
		this.recording = false;
		this.record.stop(this.processRecording.bind(this));
	}
	
	processRecording(blob) {
		this.formData.append('file', blob, 'temp.wav');
		this.url = URL.createObjectURL(blob);
		this.sanitize();
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
}
