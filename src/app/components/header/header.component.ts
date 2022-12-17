import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'header works!';
  showAddTask: boolean = false
  subscription: Subscription | any;

  constructor(private serviceUi: UiService) {
    this.serviceUi.onToggle().subscribe(value => this.showAddTask = value)
  }

  toogleTask() {
    this.serviceUi.toggleAddTask()
  }

  ngOnInit() { }
}
