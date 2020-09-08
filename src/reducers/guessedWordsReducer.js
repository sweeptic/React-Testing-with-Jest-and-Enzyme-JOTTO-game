import { actionTypes } from "../actions";



//dont make test because we have an integration test


//one file per reducer - convenction

export default (state = [], action) => {
   switch (action.type) {
      case actionTypes.GUESS_WORD:
         return [...state, action.payload]
      default:
         return state
   }
}
