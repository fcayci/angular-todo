import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks : any;

  constructor(private route : ActivatedRoute, private router : Router, private _data : DataService) {
  }

  ngOnInit() {
    this._data.task.subscribe(res => this.tasks = res);
  }

  backToHome() {
    this.router.navigate[('')]
  }

}
