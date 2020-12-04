import { combineReducers } from 'redux';
import guessedWordsReducer from './guessedWordsReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import success from './successReducer';

export default combineReducers({
  success: success,
  secretWord: secretWord,
  guessedWords: guessedWords,
});
