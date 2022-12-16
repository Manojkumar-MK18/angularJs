import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'header works!';

  constructor(private service: TaskService) { } 
  toogleTask() {
    this.service.updateBoolTask()
  }
  ngOnInit() { }
}
