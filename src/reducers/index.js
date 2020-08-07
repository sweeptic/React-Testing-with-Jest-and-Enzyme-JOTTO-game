import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./secretWordReducer";

const { combineReducers } = require("redux");


export default combineReducers({
   success,
   guessedWords,
   secretWord
})