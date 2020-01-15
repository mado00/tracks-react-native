import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      // Context.Provider - makes all of data available to all the different components rendered underneath
      // value - information that gets shared with all of child components
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
