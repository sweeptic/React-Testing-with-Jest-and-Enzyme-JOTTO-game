import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';

const setup = (secretWord = 'party') => {
  const wrapper = shallow(<Input secretWord={secretWord} />);
  //   console.log(wrapper.debug());
  return wrapper;
};

test('render Input component ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

test('proptypes - does not throw warning with expected props ', () => {
  const expectedProps = { secretWord: 'party' };
  checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {});

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
