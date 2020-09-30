const moxios = require("moxios");
import { getSecretWord } from '.';
import { storeFactory } from '../Utils/testUtils';


describe('get secret action creator', () => {
   beforeEach(() => {
      //not use axios install here in argument
      moxios.install();
   })
   afterEach(() => {
      moxios.uninstall();
   })
   test('adds response word to state', () => {
      const secretWord = 'party';
      const store = storeFactory()

      moxios.wait(() => { //wait callback is async too
         const request = moxios.requests.mostRecent();
         request.respondWith({ //async here. 2
            status: 200,
            response: secretWord
         })
      })

      return store.dispatch(getSecretWord()) //store.dispatch return a promise -> put test in the .then callback!!
         //because test will run after dispatch completes (axios call completed)
         .then(() => {
            const newState = store.getState();
            expect(newState.secretWord).toBe(secretWord)
         });

   })
});