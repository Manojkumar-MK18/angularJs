import { Component } from '@angular/core';
import Tasks, { TasksProsp } from 'src/app/moct.test';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: TasksProsp[] = Tasks;
}
