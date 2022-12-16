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
  addTaskBool: boolean = false;
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.getData().subscribe((Res) => (this.tasks = Res)); 
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
