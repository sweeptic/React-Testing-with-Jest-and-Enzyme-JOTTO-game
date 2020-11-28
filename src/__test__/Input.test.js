import Input from '../Input';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the  component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('word has not been guessed', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
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
  //   let wrapper;
  //   beforeEach(() => {
  //     const initialState = { success: true };
  //     wrapper = setup(initialState);
  //   });

  test('renders component without error', () => {
    //  const component = findByTestAttr(wrapper, 'component-input');
    //  expect(component.length).toBe(1);
  });
  test('doesnt renders input box', () => {
    //  const component = findByTestAttr(wrapper, 'input-box');
    //  expect(component.length).toBe(0);
  });
  test('doesnt renders submit button', () => {
    //  const component = findByTestAttr(wrapper, 'submit-button');
    //  expect(component.length).toBe(0);
  });
});
