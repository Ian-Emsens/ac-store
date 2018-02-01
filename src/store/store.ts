export class Store {
  private subscribers: Function[];
  private reducers: IReducers;
  private state: IState;

  constructor(
    reducers = {},
    initialState = {},
  ) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value(): IState {
    return this.state;
  }

  public dispatch(action: IAction) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach(sub => {
      sub(this.state);
    });
  }

  public subscribe(fn: Function) {
    this.subscribers = [
      ...this.subscribers,
      fn,
    ]

    fn(this.state);
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
