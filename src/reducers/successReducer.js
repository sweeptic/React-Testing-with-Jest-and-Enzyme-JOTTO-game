import { actionTypes } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_GUESS:
      return true;
    default:
      return state;
  }
};
