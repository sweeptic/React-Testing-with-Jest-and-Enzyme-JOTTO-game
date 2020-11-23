import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the  component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe('render tests', () => {
  describe('if word has been not guess', () => {
    test('renders component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-inputWrapper');
      expect(component.length.toBe(1);
    });

    test('renders input box component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length()).toBe(1);
    });

    test('renders submit button component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-submit');
      expect(component.length()).toBe(1);
    });
  });

  describe('if word has been guess', () => {
    test('renders component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-inputWrapper');
      expect(component.length()).toBe(1);
    });

    test('dont renders input box component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length()).toBe(0);
    });

    test('dont renders submit button component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-submit');
      expect(component.length()).toBe(0);
    });
  });
});
