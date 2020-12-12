import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRETWORD: 'SET_SECRETWORD',
};

export const guessWord = guessedWord => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord: guessedWord,
        letterMatchCount: letterMatchCount,
      },
    });

    if (guessedWord == secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    return axios.get('http://localhost:7222').then(response => {
      dispatch({
        type: actionTypes.SET_SECRETWORD,
        payload: response.data,
      });
      // console.log('response received from action index');
    });
  };
};
