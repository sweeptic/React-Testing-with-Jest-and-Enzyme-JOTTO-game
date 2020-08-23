import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

configure({ adapter: new EnzymeAdapter() });


//render test

//if success true -> render non empty congrat message

//if success false -> render empty congrat message



export default Congrats;
