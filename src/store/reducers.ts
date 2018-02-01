import * as fromActions from './actions';
import { IAction } from './index';

export const initialState = {
  data: [
    {
      label: 'Eat Sushi',
      complete: false,
    }
  ],
};

export function reducer(
  state = initialState,
  action: IAction,
) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [
        ...state.data,
        todo
      ];

      return {
        ...state,
        data
      }
    }

    default:
      console.log('Unknown Action', action);
      break;
  }

  return state;
}
