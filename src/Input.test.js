import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from '../test/testUtils';
import Input from './Input';

test('Input renders without error ', () => {});

test('propTypes - does not throw warning with expected props ', () => {
  const expectedProps = { secretWord: 'party' };
  checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {});

  test('field is cleared upon submit button click', () => {});
});
