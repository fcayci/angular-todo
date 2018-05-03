import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private tasks = new BehaviorSubject<any>(['Buy milk', 'Write paper', 'Fix toilet']);
  task = this.tasks.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task)
  }

}
