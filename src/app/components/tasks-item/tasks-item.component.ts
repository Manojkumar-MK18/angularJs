import { Component, Input } from '@angular/core';
import { TasksProsp } from 'src/app/moct.test';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  faTimes = faTimes
  @Input() task: TasksProsp | any
}
