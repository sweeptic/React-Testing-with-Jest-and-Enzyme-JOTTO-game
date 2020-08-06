import { actionTypes } from "../actions";

/**
 * @function successReducer
 * @param {array} state - xxx
 * @param {object} action - action to be reduced
 * @returns {boolean} - new state
 */
export default (state = false, action) => {
   switch (action.type) {
      case actionTypes.CORRECT_GUESS:
         return true;
      default:
         return state;
   }
}