import { Action } from '@ngrx/store';

export enum ActionsType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESER',
}

class incrementActions implements Action {
  readonly type = ActionsType.INCREMENT;
}

class decrementActions implements Action {
  readonly type = ActionsType.DECREMENT;
}

class resetActions implements Action {
  readonly type = ActionsType.RESET;
}

export { incrementActions, decrementActions, resetActions };
