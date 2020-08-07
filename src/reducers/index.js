import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";
const { combineReducers } = require("redux");


export default combineReducers({
   success,
   guessedWords
})