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

describe('access to redux props ', () => {
  let wrapper;
  //connected component test

  test('success piece of state', () => {
    wrapper = setup({ success: true });
    const prop = wrapper.instance().props.success;
    expect(prop).toBe(true);
  });

  test('secret word piece of state', () => {
    wrapper = setup({ secretWord: 'party' });
    const prop = wrapper.instance().props.secretWord;
    expect(prop).toBe('party');
  });

  test('guessWord action creator piece of state', () => {
    wrapper = setup();
    const prop = wrapper.instance().props.guessWord;
    expect(prop).toBeInstanceOf(Function);
  });
});

describe('', () => {
  const guessWordMock = jest.fn();

  const props = {
    guessWord: guessWordMock,
  };

  //set up unconnected component setup
  const wrapper = shallow(<UnconnectedInput {...props} />);

  //find the button and click
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click');

  //see if mock run
  const guessWordCallCount = guessWordMock.mock.calls.length;

  expect(guessWordCallCount).toBe(1);
});
