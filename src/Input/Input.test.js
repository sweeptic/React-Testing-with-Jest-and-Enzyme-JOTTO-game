import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './Input';
import { storeFactory } from '../Utils/testUtils';
//import checkPropTypes from 'check-prop-types'


configure({ adapter: new EnzymeAdapter() });


const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

setup()

describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = wrapper.find("[data-test='component-input']");
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const component = wrapper.find("[data-test='input-box']");
      expect(component.length).toBe(1);
    });
    test('renders submit button', () => {
      const component = wrapper.find("[data-test='submit-button']");
      expect(component.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });
    test('renders input box', () => {

    });
    test('renders submit button', () => {

    });
  });

});

//with thunk
describe('updated state', () => {

});

export default Input;
