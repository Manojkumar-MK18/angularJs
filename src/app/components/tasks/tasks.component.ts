import { Component } from '@angular/core';
import { TasksProsp } from 'src/app/moct.test';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: TasksProsp[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.taskService.getData().subscribe((Res) => this.tasks = Res);
  }
  t() {
    console.log('s');

  }
}
