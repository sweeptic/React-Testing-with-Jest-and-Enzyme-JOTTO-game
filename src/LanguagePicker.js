import React from 'react';
import PropTypes from 'prop-types';

const languages = [
  { code: 'en', symbol: '🇺🇸' },
  { code: 'emoji', symbol: '😊' },
];

const LanguagePicker = () => {
  return <div></div>;
};

//simple propTypes
LanguagePicker.propTypes = {
  language: PropTypes.func.isRequired,
};

export default LanguagePicker;
