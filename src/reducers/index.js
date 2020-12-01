import { combineReducers } from 'redux';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import success from './successReducer';

export default combineReducers({
  success: success,
  guessedWords: guessedWords,
  secretWord: secretWord,
});
