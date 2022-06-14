import { createContext, useReducer } from 'react'

export default (reducer, actions, defaultValue) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, disatch] = useReducer(reducer, defaultValue);
    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](disatch);
    }

    return (
      <Context.Provider values={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider };
}
