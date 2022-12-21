import { Action } from '@ngrx/store';
import * as myAction from './actions';

const initialState = 0;

export function counterReducer(state = initialState, actions: Action) {
  switch (actions.type) {
    case myAction.ActionsType.INCREMENT:
      return state + 1;
    case myAction.ActionsType.DECREMENT:
      return state - 1;
    case myAction.ActionsType.RESET:
      return initialState;
  }
  return state;
}
