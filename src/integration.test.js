import { storeFactory } from "./Utils/testUtils";
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
   const secretWord = 'party';
   const unsuccessfulGuess = 'train';

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

      })
   })

   describe('some guessed words', () => {
      test('updates state correctly for unsuccessful guess ', () => {

      })
      test('updates state correctly for successful guess ', () => {

      })
   })


})
