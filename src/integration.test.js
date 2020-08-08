import { storeFactory } from "../test/testUtils";
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
   const secretWord = 'party';
   const unsuccessfulGuess = 'train';

   describe('no guessed words', () => {
      let store;
      const initialState = { secretWord };

      beforeEach(() => {
         store = storeFactory(initialState);
      });

      test('updated state correctly for unsuccessful guess', () => {
         store.dispatch(guessWord(unsuccessfulGuess));
         const newState = store.getState();
         const expectedState = {
            ...initialState,
            success: false,
            guessedWords: [{
               guessWord: unsuccessfulGuess,
               letterMatchCount: 3
            }]
         }
         expect(newState).toEqual(expectedState);
      });
      test('updated state correctly for successful guess', () => {


         store.dispatch(guessWord(secretWord));
         const newState = store.getState();
         const expectedState = {
            secretWord,
            success: true,
            guessedWords: [{
               guessWord: secretWord,
               letterMatchCount: 5
            }]
         }
         expect(newState).toEqual(expectedState);

      });
   });



   describe('some guessed words', () => {

      const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
      const initialState = { guessedWords, secretWord };
      let store;

      beforeEach(() => {
         store = storeFactory(initialState);
      });


      test('updated state correctly for unsuccessful guess', () => {
         store.dispatch(guessWord(unsuccessfulGuess));
         const newState = store.getState();
         const expectedState = {
            secretWorde,
            success: false,
            guessedWord: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
         };
         expect(newState).toEqual(expectedState);
      });
      test('updated state correctly for successful guess', () => {
         store.dispatch(guessWord(secretWord));
         const newState = store.getState();
         const expectedState = {
            secretWorde,
            success: true,
            guessedWord: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 5 }]
         };
         expect(newState).toEqual(expectedState);
      });

   });

});