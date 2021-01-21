import React from 'react';
import { shallow } from 'enzyme';
import { SuccessProvider, useSuccess } from './successContext';

const FunctionalComponent = () => {
  useSuccess();
  return <div />;
};

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
  const setup = () => {
    return shallow(<FunctionalComponent />);
  };
  expect(setup).toThrow();
});

test('useSuccess does not throw error when wrapped in SuccessProvider', () => {
  const setup = () => {
    return shallow(
      <SuccessProvider>
        <FunctionalComponent />
      </SuccessProvider>
    );
  };
  expect(setup).not.toThrow();
});
