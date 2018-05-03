import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('tasks', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.5s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  btnName : string = "Add a task";
  taskTxt : string = "Send e-mail to ...";
  taskCnt : number;

  tasks = [];

  addTask(){
    if (this.taskTxt != ''){
      if (this.taskCnt < 10){
        this.tasks.push(this.taskTxt);
        this._data.changeTask(this.tasks);
        this.taskCnt = this.tasks.length;
        this.taskTxt = '';
      } else {
        alert('Finish your tasks first...')
      }
    }
  }

  removeTask(i){
    this.tasks.splice(i, 1);
    this.taskCnt = this.tasks.length;
    this._data.changeTask(this.tasks);
  }

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.task.subscribe(res => this.tasks = res);
    this._data.changeTask(this.tasks);
    this.taskCnt = this.tasks.length;
  }

}
