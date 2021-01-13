import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
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
  const mockSetGuessWord = jest.fn();

  let wrapper;
  beforeEach(() => {
    mockSetGuessWord.mockClear();
    React.useState = jest.fn().mockReturnValue(['', mockSetGuessWord]);
    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    const mockInputEvent = { target: { value: 'train' } };
    const component = findByTestAttr(wrapper, 'component-input');
    component.simulate('change', mockInputEvent);
    expect(mockSetGuessWord).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const component = findByTestAttr(wrapper, 'component-button');
    component.simulate('click', { preventDefault() {} });
    expect(mockSetGuessWord).toHaveBeenCalledWith('');
  });
});

describe('languagePicker', () => {
  test('correctly renders submit string in English by default', () => {});
  test('correctly renders congrats string in emoji', () => {});
});
