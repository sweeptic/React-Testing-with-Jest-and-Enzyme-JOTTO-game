import React from 'react';
import { guessWord } from '../actions';
import App from '../App';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux connected component test in App component', () => {
  test('success is redux prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });

  test('getSecretWord action creator is redux prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });

  test('secretWord is redux prop', () => {
    const wrapper = setup({ secretWord: 'party' });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe('party');
  });

  test('guessedWords is redux prop', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
});
