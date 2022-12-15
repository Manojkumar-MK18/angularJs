import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksProsp } from 'src/app/moct.test';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  faTimes = faTimes;
  @Input() task: TasksProsp | any;
  @Output() onDeleteTask: EventEmitter<TasksProsp> = new EventEmitter();
  @Output() onToogleTask: EventEmitter<TasksProsp> = new EventEmitter();

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
  
  onToogle(task: any) {
    this.onToogleTask.emit(task);
  }
}
