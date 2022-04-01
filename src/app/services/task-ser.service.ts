import { Injectable } from '@angular/core';
import { ITask } from '../model/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskSerService {
  public taskList : ITask [] =[

  ];
  constructor() { }
}
