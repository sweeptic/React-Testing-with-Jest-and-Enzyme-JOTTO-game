import React from 'react';

const successContext = React.createContext();

export function useSuccess() {
  const context = React.useContext(successContext);
  if (!context) {
    throw new Error('success must be used within a successProvider');
  }
  return context;
}

export function SuccessProvider(props) {
  const [state, setState] = React.useState(false);

  const value = React.useMemo(() => [state, setState], [state]);

  return <successContext.Provider value={value} {...props} />;
}
export default { SuccessProvider, useSuccess };
