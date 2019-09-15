import React from "react";
import { VariationKeys } from "./../themes/variations";

type ContextProps = {
  isSaveModalOpen: boolean;
  // TODO replace number with variation type
  selectedVariations: { [key in VariationKeys]: number };
};

// TODO how to typescript a specific payload with a type? Maybe union types of objects?
type Action = {
  type: "TOGGLE_SAVE_MODAL" | "UPDATE_EMAIL" | "UPDATE_VARIATION";
  payload: any;
};

// Context
const State = React.createContext<Partial<ContextProps>>(null);
const Dispatch = React.createContext<React.Dispatch<Action>>(null);

// Reducer
const reducer = (state, action: Action) => {
  switch (action.type) {
    case "TOGGLE_SAVE_MODAL":
      return {
        ...state,
        isSaveModalOpen: action.payload
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "UPDATE_VARIATION":
      console.log(action, {
        ...state.selectedVariations,
        [action.payload.key]: action.payload.variation
      });
      return {
        ...state,
        selectedVariations: {
          ...state.selectedVariations,
          [action.payload.key]: action.payload.variation
        }
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isSaveModalOpen: false,
    selectedVariations: {}
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
