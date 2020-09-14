import { actionTypes } from "../actions";

const { default: reducers } = require(".");


export default (state = null, action) => {
   switch (action.type) {
      case actionTypes.SET_SECRET_WORD:
         return action.payload
      default:
         return state;
   }
}