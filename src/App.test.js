import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
  return shallow(<App />);
};

test('App renders without error ', () => {});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {});

  test('secretWord does not update on App update', () => {});
});

describe('secretWord is not null', () => {
  test('renders app when secretWord is not null', () => {});

  test('does not render spinner when secretWord is not null', () => {});
});

describe('secretWord is  null', () => {
  test('does not renders app when secretWord is not null', () => {});

  test('render spinner when secretWord is not null', () => {});
});
