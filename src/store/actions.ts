// Action Constants === Action Enumerable
export const ADD_TODO = '[Todos] ADD_TODO';

// Action Creator
export class AddTodo {
  readonly type = ADD_TODO;

  constructor(
    public payload: any,
  ) {

  }
}
