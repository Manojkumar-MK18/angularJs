import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input() text: string | any;
  @Input() color: string | any;
  @Output() btnClick = new EventEmitter();

  ngOnInit() { }
  onClick() {
    this.btnClick.emit()
  }

}
