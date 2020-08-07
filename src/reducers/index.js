const { combineReducers } = require("redux");
import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";

export default combineReducers({
   success,
   guessedWords
})