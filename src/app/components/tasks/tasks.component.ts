import { Component } from '@angular/core';
import { TasksProsp } from 'src/app/moct.test';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: TasksProsp[] = [];
  addTaskBool: boolean = false;
  
  constructor(private taskService: TaskService, private uiServices: UiService) { }

  ngOnInit() {
    this.taskService.getData().subscribe((Res) => (this.tasks = Res));
    this.uiServices.onToggle().subscribe(value => this.addTaskBool = value)
  }

  deleteTask(task: TasksProsp) {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task?.id))
      );
  }

  toggleTask(task: TasksProsp) {
    task.remainder = !task.remainder;
    this.taskService.updateToggleTask(task).subscribe();
  }

  addTask(task: TasksProsp) {
    this.taskService
      .addNewTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
}
