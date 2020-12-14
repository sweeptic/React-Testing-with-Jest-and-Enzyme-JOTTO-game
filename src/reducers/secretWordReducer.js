import { actionTypes } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRETWORD: {
      console.log(action.payload);

      return action.payload;
    }

    default:
      return state;
  }
};
