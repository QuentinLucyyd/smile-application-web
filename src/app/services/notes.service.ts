import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private _APIService: ApiServiceService) { }

    public getNotes() {
      return this._APIService.getNotes();
    }
  
    public getUserNotes(user_id) {
      return this._APIService.getUserNotes(user_id);
    }
}
