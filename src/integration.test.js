import { storeFactory } from "./Utils/testUtils";
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
   const secretWord = 'party';
   const unsuccessfulGuess = 'train';

   const successfulGuess = 'party';

   describe('no guessed words', () => {
      let store;
      const initialState = { secretWord }
      beforeEach(() => {
         store = storeFactory(initialState)
      })
      test('updates state correctly for unsuccessful guess ', () => {
         //dispatch
         store.dispatch(guessWord(unsuccessfulGuess));
         //get the state
         const newState = store.getState()
         //define what we expect the state to be
         const expectedState = {
            ...initialState,
            success: false,
            guessedWords: [{
               guessedWord: unsuccessfulGuess,
               letterMatchCount: 3
            }]
         }
         //expect
         expect(newState).toEqual(expectedState)
      })



      test('updates state correctly for successful guess ', () => {
         //dispatch
         store.dispatch(guessWord(secretWord));
         //get the state
         const newState = store.getState();
         //define what we expect the state to be
         const expectedState = {
            secretWord,
            success: true,
            guessedWords: [{
               guessedWord: secretWord,
               letterMatchCount: 5
            }]
         }
         //expect
         expect(newState).toEqual(expectedState)
      })
   })

   describe('some guessed words', () => {
      const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
      const initialState = { guessedWords, secretWord }
      let store;

      beforeEach(() => {
         store = storeFactory(initialState)
      })

      test('updates state correctly for unsuccessful guess ', () => {
         store.dispatch(guessWord(unsuccessfulGuess));
         const newState = store.getState();
         const expectedState = {
            secretWord,
            success: false,
            guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
         }
         //expect
         expect(newState).toEqual(expectedState)
      })
      test('updates state correctly for successful guess ', () => {
         store.dispatch(guessWord(secretWord));
         const newState = store.getState();
         const expectedState = {
            secretWord,
            success: true,
            guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
         }
         //expect
         expect(newState).toEqual(expectedState)
      })
   })


})
