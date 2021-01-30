import React, { useContext } from 'react';
import stringsModule from './helpers/strings';

import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = () => {
  const { getStringByLanguage } = stringsModule;
  const [success] = successContext.useSuccess();
  const languageCode = React.useContext(languageContext);

  if (success) {
    return (
      <div data-test='component-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          {getStringByLanguage(languageCode, 'congrats')}
          {/* Congratulations! You guessed the word! */}
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};

export default Congrats;
