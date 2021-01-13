import React from 'react';
import propTypes from 'prop-types';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  const languageIcons = languages.map(lang => (
    <span
      data-test='language-icon'
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol}
    </span>
  ));

  return <div data-test='component-languagePicker'>{languageIcons}</div>;
};

//simple propTypes
LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};

export default LanguagePicker;
