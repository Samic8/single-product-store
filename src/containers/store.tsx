import React from "react";

// Context
const State = React.createContext(null);
const Dispatch = React.createContext(null);

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SAVE_MODAL":
      return {
        ...state,
        isSaveModalOpen: action.payload
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isSaveModalOpen: false
  });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
export const Store = {
  State,
  Dispatch,
  Provider
};
