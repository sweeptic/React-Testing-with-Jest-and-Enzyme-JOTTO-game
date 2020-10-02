import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input, { UnconnectedInput } from './Input';
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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })
    test('renders component without error', () => {
      const component = wrapper.find("[data-test='component-input']");
      expect(component.length).toBe(1);
    });
    test('doe not render input box', () => {
      const component = wrapper.find("[data-test='input-box']");
      expect(component.length).toBe(0);
    });
    test('does not render submit button', () => {
      const component = wrapper.find("[data-test='submit-button']");
      expect(component.length).toBe(0);
    });
  });

});

//with thunk
describe('redux props', () => {

  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('"guessWord" action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
});

describe('"guessWord" action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train"

  beforeEach(() => {
    //create a mock function for 'getSecretWord'
    guessWordMock = jest.fn();

    //set up input, with guessWordMock as a prop
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    //add value to input box
    wrapper.setState({ currentGuess: guessedWord })

    //simulate click on submit button
    const submitButton = wrapper.find("[data-test='submit-button']");
    submitButton.simulate('click', { preventDefault() { } });
  })


  test('"guessWord" was called once', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  })

  test('calls "guessWord with input value as argument" ', () => {
    console.log(guessWordMock.mock.calls)
    const guessWordArg = guessWordMock.mock.calls[0][0]; //  ---> ['train'],
    expect(guessWordArg).toBe(guessedWord)
  })

  /*
  'train'
  'agile'
  [['train', 3], ['agile', 1]]
*/


});


export default Input;