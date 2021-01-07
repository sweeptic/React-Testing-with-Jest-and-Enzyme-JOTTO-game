import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('render Input component ', () => {
  const wrapper = setup();
  const componentInput = findByTestAttr(wrapper, 'component-input');
  expect(componentInput.length).toBe(1);
});

test('propTypes - does not throw warning with expected props ', () => {
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

  test('state updates with value of input box upon change', () => {
    const componentInput = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    componentInput.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
