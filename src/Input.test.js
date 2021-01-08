import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('render Input component ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

test('propTypes - does not throw warning with expected props ', () => {
  const expectedProps = { secretWord: 'party' };
  checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {});

test('state updates with value of input box upon change', () => {});

test('field is cleared upon submit button click', () => {});
