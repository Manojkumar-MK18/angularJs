import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementActions, incrementActions, resetActions } from './actions';

@Component({
  selector: 'app-reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.css'],
})
export class ReducerComponent {
  myCount$: any;
  constructor(private store: Store<{ count: number }>) {
    this.myCount$ = store.select('count');
  }
  onClickIncrement() {
    this.store.dispatch(new incrementActions());
  }

  onClickDecrement() {
    this.store.dispatch(new decrementActions());
  }

  onClickReset() {
    this.store.dispatch(new resetActions());
  }
}
