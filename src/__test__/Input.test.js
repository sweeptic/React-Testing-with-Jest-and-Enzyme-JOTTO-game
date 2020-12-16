import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from '../Input';

/**
 * Factory function to create a ShallowWrapper for the  component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });
    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(0);
    });
    test('does not render submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has success piece of state as prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    // create a mock function for `getSecretWord`
    guessWordMock = jest.fn();

    // set up Input, with guessWordMock as a prop
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    // simulate click on submit button
    const submit = findByTestAttr(wrapper, 'submit-button');

    submit.simulate('click', { preventDefault() {} });
  });

  test('`guessWord` was called once', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls `guessWord with input value as argument`', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    console.log(guessWordArg);

    expect(guessWordArg).toBe(guessedWord);
  });
});
