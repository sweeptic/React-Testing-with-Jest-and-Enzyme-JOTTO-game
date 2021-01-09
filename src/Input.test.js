import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = () => {
  return shallow(<Input />);
};

test('Input renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

test('propTypes - does not throw warning with expected props ', () => {
  const expectedProps = { secretWord: 'party' };
  checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {
  const wrapper = setup();
  const mockSetSecretWord = jest.fn();
  // mockSetSecretWord.mockClear();

  React.useState = jest.fn(() => {
    ['', mockSetSecretWord];
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetSecretWord).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', evt => evt.preventDefault());

    expect(mockSetSecretWord).toHaveBeenCalledWith('');
  });
});
