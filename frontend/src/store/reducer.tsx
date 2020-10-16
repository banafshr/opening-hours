import { TAction } from './actions';
import { IState } from './initialState';
import * as types from './types';

const reducer = (state: IState, action: TAction): IState => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: false,
        openingHours: []
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        openingHours: payload
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        openingHours: []
      };
    default:
      throw new Error('You must provide a valid type');
  }
};

export default reducer;
