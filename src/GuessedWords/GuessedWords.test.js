import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GuessedWords from './GuessedWords';
//import checkPropTypes from 'check-prop-types'

configure({ adapter: new EnzymeAdapter() });


test('renders without error ', (props={}) => {
  const wrapper = shallow(<GuessedWords {...props} />);
  const appComponent = wrapper.find("[data-test='component-guessedwords']");
  expect(appComponent.length).toBe(1);
})



export default GuessedWords;
