const moxios = require("moxios");
import { getSecretWord } from '.';
import { storeFactory } from '../Utils/testUtils';


describe('get secret action creator', () => {
   beforeEach(() => {
      moxios.install();
   })
   afterEach(() => {
      moxios.uninstall();
   })
   test('adds response word to state', () => {
      const secretWord = 'party';
      const store = storeFactory()

      moxios.wait(() => {
         const request = moxios.requests.mostRecent();
         request.respondWith({
            status: 200,
            response: secretWord
         })
      })
      
      return store.dispatch(getSecretWord())
         .then(() => {
            const newState = store.getState();
            expect(newState.secretWord).toBe(secretWord)
         });

   })
});