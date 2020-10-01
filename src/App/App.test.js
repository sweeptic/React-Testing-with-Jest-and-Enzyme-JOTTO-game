import React from 'react';
import { shallow, } from 'enzyme';

import { storeFactory } from '../Utils/testUtils';
import App from './App';


const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}



describe('redux properties', () => {

  test('has access to "success" state ', () => {

  });

  test('has access to "secretWord" state ', () => {

  });

  test('has access to "guessedWords" state ', () => {

  });

  test('get "secretWord" action creator is a function on the props', () => {

  });

});



export default App;
