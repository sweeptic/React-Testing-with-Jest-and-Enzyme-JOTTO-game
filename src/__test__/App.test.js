import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App from '../App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} />)
    .dive()
    .dive();
};

describe('redux properties', () => {
  let wrapper;

  test('has access to `success` state', () => {
    wrapper = setup({ success: true });
    const prop = wrapper.instance().props.success;
    expect(prop).toBe(true);
  });

  test('has access to `secretWord` state', () => {
    wrapper = setup({ secretWord: 'party' });
    const prop = wrapper.instance().props.secretWord;
    expect(prop).toBe('party');
  });

  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'party', letterMatchCount: 4 }],
      wrapper = setup({ guessedWords: guessedWords });
    const prop = wrapper.instance().props.guessedWords;
    expect(prop).toBe(guessedWords);
  });

  test('`getSecretWord` action creator is a function on the props', () => {
    wrapper = setup();
    const prop = wrapper.instance().props.getSecretWord;
    expect(prop).toBeInstanceOf(Function);
  });
});

// test('`getSecretWord` runs on App mount', () => {});
