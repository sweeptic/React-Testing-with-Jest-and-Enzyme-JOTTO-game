import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './test/testUtils';
import Congrats from './Congrats';

// --render component
// --render - props success true - show congratulation message
// --render - props success false - donst show anything
// --proptypes - dont show wrning when expected props

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the  component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('render component ', () => {
  const wrapper = setup();
  const component = findByTestAttr('wrapper', 'component-congrats');
  expect(component.length().toBe(1));
});

test('render - props success true - show congratulation message ', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congratulation');
  expect(component.text().not().toBe(''));
});

test('render - props success false - doesnt show anything ', () => {
  const wrapper = setup({ props: false });
  const component = findByTestAttr(wrapper, 'component-');
  expect(component.text().toBe(''));
});

test('proptypes - dont show warning when expected props ', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
