export class Store {
  private subscribers: Function[];
  private reducers: IReducers;
  private state: IState;

  constructor(
    reducers = {},
    initialState = {},
  ) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value(): IState {
    return this.state;
  }

  public dispatch(action: IAction) {
    this.state = this.reduce(this.state, action);
    console.log(this.state);
  }

  private reduce(state: IState, action: IAction): IState {
    const newState = {};

    for (const key in this.reducers) {
      newState[key] = this.reducers[key](state[key], action);
    }

    return newState;
  }

}

export interface IAction {
  type?: string;
  payload?: any;
}

export interface IReducers {
  [key: string]: Function;
}

export interface IState {
  [key: string]: any;
}
