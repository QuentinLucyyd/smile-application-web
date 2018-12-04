import { Injectable } from '@angular/core';
import { Checklist } from '../models/checklist';
import { ApiServiceService } from './api-service.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {
  Checklist: Array<Checklist> = [];

  constructor(
    private _APIService: ApiServiceService
  ) { }

  public getChecklists()
	{
    return this._APIService.getChecklists();
  }
  
  public getGoalChecklists(goal_id)
	{
		return this._APIService.getGoalChecklists(goal_id).subscribe(result => {
      for (let item of result.data) {
          this.Checklist.push(new Checklist(item));
        }
    }, err => {
      reject(err);
    });
  }
  
  public createChecklist(checklist: Array<Checklist>)
	{
		return this._APIService.createChecklist(checklist);
	}
}
