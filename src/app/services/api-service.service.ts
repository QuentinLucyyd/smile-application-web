import { Injectable, isDevMode } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	token: String = '';
	host = 'http://localhost:3001';
	
	constructor(
		private _http: Http,
		private _Newhttp: HttpClient
	) { }

	//User Related Requests
}
