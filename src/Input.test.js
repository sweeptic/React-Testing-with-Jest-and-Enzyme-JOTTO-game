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
