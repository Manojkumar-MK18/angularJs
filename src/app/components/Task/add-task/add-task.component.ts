import { Component, EventEmitter, Output } from '@angular/core';
import { TasksProsp } from 'src/app/moct.test';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<TasksProsp> = new EventEmitter();
  remainder: boolean = false;
  text: string | any;
  day: string = '';

  onSubmit() {
    if (!this.text) {
      return alert('Please Add Task');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      remainder: this.remainder,
    };

    this.onAddTask.emit(newTask);

    this.day = '';
    this.remainder = false;
    this.text = '';
  }

  constructor() {}
  ngOnInit() {}
}
