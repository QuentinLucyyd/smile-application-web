import { Injectable } from '@angular/core';
import { Checklist } from '../models/checklist';
import { ApiServiceService } from './api-service.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {
  UserChecklists: Array<Checklist> = [];

  constructor(
    private _APIService: ApiServiceService
  ) { }

  public getAllChecklists()
	{
    return this._APIService.getAllChecklists();
  }

  public getUserChecklists(user_id)
	{
    return new Promise((resolve, reject) => {	
			this.UserChecklists = [];
			this._APIService.getUserChecklists(user_id).subscribe(result => {
				for (let item of result.data) {
          console.log(item);
						this.UserChecklists.push(new Checklist(item));
					}
				resolve(this.UserChecklists);
			}, err => {
				reject(err);
			})
		})
  }
  
  public createChecklist(checklist: Array<Checklist>)
	{
		return this._APIService.createChecklist(checklist);
	}
}
