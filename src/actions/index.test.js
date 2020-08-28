import { correctGuess, actionTypes } from './index'

describe('correctGuess', () => {
   test('return an action with type "CORRECT_GUESS"', () => {
      const action = correctGuess();
      // toEqual -> compare mutable data types (recursive deep equal)
      // toBe -> compare immutable objects (numbers strings)
      expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
   })


});