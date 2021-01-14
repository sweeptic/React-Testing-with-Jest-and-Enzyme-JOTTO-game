import React from 'react';
import PropTypes from 'prop-types';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  const icons = languages.map(item => (
    <span data-test='component-icons' key={item.code} onClick={setLanguage}>
      {item.symbol}
    </span>
  ));

  return <div data-test='component-picker'>{icons}</div>;
};

//simple propTypes
LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LanguagePicker;
